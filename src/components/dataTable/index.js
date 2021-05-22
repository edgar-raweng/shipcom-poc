import * as React from 'react'

import { 
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'

import { 
  DataTable 
} from 'react-native-paper'

const Table = ( props ) => {
  const { dataSource } = props

  const [page, setPage] = React.useState(0)
  
  const itemsPerPage = 2
  const from = page * itemsPerPage
  const to = (page + 1) * itemsPerPage



  // validate array of data
  if ( !Array.isArray(dataSource) && !dataSource.length) {
    return (
      <View style={styles.container}>
        <Text>No data found</Text>
      </View>
    )
  }

  const headers = Object.keys(dataSource[0])
  
  return (
    <SafeAreaView>
      <ScrollView horizontal>
      <DataTable>
        {/* Table Header */}
        <DataTable.Header style={styles.header}>
          { headers.map(
              title => (
                <DataTable.Title key={title} style={styles.headerCell}>
                  <Text style={styles.headerText}>{ title }</Text>
                </DataTable.Title>
              )
            )
          }
        </DataTable.Header>

         {/* Table Body */}
        { dataSource
            .slice(itemsPerPage * page, itemsPerPage * ( page + 1))
            .map( (item, i) => (
              <DataTable.Row style={i % 2 === 0 ? styles.evenRow : styles.oddRow }>
                { headers.map( key => (
                  <DataTable.Cell>{item[key]}</DataTable.Cell>)
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
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#2b2b2b'
  },
  headerCell: {
    padding: 5
  },
  headerText: {
    color: 'white',
    margin: 5
  },
  oddRow: {
    backgroundColor: 'lightgrey'
  }
})


export default Table;