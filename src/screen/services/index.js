import React, { useState } from 'react'

// Import Libraries
import { 
  View
} from 'react-native'
import { connect, useDispatch } from 'react-redux'
import {
  Button,
  Portal,
  Dialog,
  Paragraph
} from 'react-native-paper'

// Import Components
import {
  Header,
  DataTable
} from 'src/components'

// Import Styles
import styles from './styles'

const ServicesScreen =  ({ dataRecords }) => {

  // Set state
  const [ visible, setVisible ] = useState( false )
  const showDialog = () => setVisible( true )
  const hideDialog = () => setVisible( false )
  const dispatch = useDispatch()

  const handleClearData = () => {

    dispatch({ type: `DELETE_DATA` })

    hideDialog()

  }

  return (
    <View>
      <Header
        title={ `Services Request` }
      />
      <DataTable dataSource={ dataRecords }/>

      {/* Buttons */}
      <View style={ styles.buttonsWrapper }>
        <View style={ styles.buttonDownloadContainer }>
          <Button mode={ `contained` }>
            Download
          </Button>
        </View>

        <View style={ styles.buttonClearContainer }>
          <Button
            mode={ `contained` }
            onPress={ showDialog }
          >
            Clear
          </Button>
        </View>
      </View>

      {/* Dialog */}
      <Portal>
        <Dialog
          visible={ visible }
          onDismiss={ hideDialog }
        >
          <Dialog.Title>
            Confirm
          </Dialog.Title>

          <Dialog.Content>
            <Paragraph>
              Are you sure you want to clear the data table?
            </Paragraph>
          </Dialog.Content>

          <Dialog.Actions>
            <Button
              onPress={ hideDialog }
            >
              Yes!, I'm sure
            </Button>

            <Button
              onPress={ handleClearData }
            >
              Cancel
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  )

}

const mapStateToProps = ( state ) => {

  const { records } = state

  return { dataRecords: records }

}

export default connect( mapStateToProps )( ServicesScreen )