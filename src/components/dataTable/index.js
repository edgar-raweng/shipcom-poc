import React, { Fragment, useState } from 'react'

import styles from './styles'

import { 
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native'

import { 
  DataTable,
  Card,
  Title,
} from 'react-native-paper'

import { elementKey } from 'src/utils'

const Table = ( { dataSource } ) => {

  // Set state
  const [page, setPage] = useState(0)

  // Pagination
  const itemsPerPage = 4
  const from = page * itemsPerPage
  const to = (page + 1) * itemsPerPage

  const doWeHaveInfo =  !Array.isArray( dataSource ) || dataSource.length === 0 ? false : true

  const dataTableHeaders = doWeHaveInfo ? Object.keys(dataSource[0]) : null

  return (
    <Fragment>
      {
        !doWeHaveInfo ? 
          (
            <View style={styles.container}>
              <Card>
                <Card.Content>
                  <Title>
                    We don't have any data to render!
                  </Title>
                </Card.Content>
              </Card>
            </View>
          )
          :
          (
            <SafeAreaView>
              <ScrollView horizontal>
                <DataTable style={ styles.container }>

                  {/* Table Header */}
                  <DataTable.Header style={styles.header}>
                    { dataTableHeaders.map( ( title, index ) => (

                        <DataTable.Title key={ elementKey( `table-header`, index ) } style={ styles.headerCell }>
                          <Text style={ styles.headerText }>
                            {
                              title.split(`_`).join(` `)
                            }
                          </Text>
                        </DataTable.Title>

                      ) )
                    }
                  </DataTable.Header>

                  {/* Table Body */}
                  { dataSource
                      .slice(itemsPerPage * page, itemsPerPage * ( page + 1))
                      .map( (item, index) => (
                        <DataTable.Row key={ elementKey( `table-row`, index ) } style={index % 2 === 0 ? styles.evenRow : styles.oddRow }>
                          { dataTableHeaders.map( ( key, number  ) => (
                            <DataTable.Cell key={ elementKey( `table-column`, number ) }>{item[key]}</DataTable.Cell>)
                          )}
                        </DataTable.Row>
                      )
                    )
                  }
                </DataTable>
              </ScrollView>

            <DataTable.Pagination
              page={page}
              numberOfPages={Math.round(dataSource.length / itemsPerPage)}
              onPageChange={page => setPage(page)}
              label={`${from + 1}-${to} of ${dataSource.length}`}
            />
            </SafeAreaView>
          )
      }
    </Fragment>
  )
  
}

export default Table;