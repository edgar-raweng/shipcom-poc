import React, { useState } from 'react'

// Import Libraries
import { 
  View
} from 'react-native'
import { connect } from 'react-redux'
import {
  Portal,
  Dialog,
  Paragraph
} from 'react-native-paper'

// Import Components
import {
  Header,
  DataTable,
  Button,
  TwoButtons,
  ActivityModal
} from 'src/components'

// Import Styles
import styles from './styles'

// Import State
import {
  DOWNLOAD_DATA,
  CLEAR_DATA
} from 'src/state/actionTypes'

const ServicesScreen =  ({ records, downloadData, clearData }) => {

  // Set state
  const [ visible, setVisible ] = useState( false )
  const [ showActivityModal, setShowModal ] = useState( false )
  const showDialog = () => setVisible( true )
  const hideDialog = () => setVisible( false )

  const handleClearData = () => {

    clearData()

    hideDialog()

  }

  const handlerDownload = () => {
    setShowModal( true )
    downloadData()
  }

  return (
    <View style={ styles.viewContainer }>
      <Header
        title={ `Services Request` }
      />
      <DataTable dataSource={ records }/>

      {/* Buttons */}
      <TwoButtons
        firstButton={ <Button onPress={ handlerDownload }>Download</Button> }
        secondButton={ <Button onPress={ showDialog }>Clear</Button> }
      />

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
              onPress={ handleClearData }
              isText
            >
              Yes!, I'm sure
            </Button>

            <Button
              onPress={ hideDialog }
              isText
            >
              Cancel
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      {/* Activity Modal */}
      <ActivityModal
        open={ showActivityModal }
      />
    </View>
  )

}

const mapStateToProps = ( state ) => state
const mapDispatchToProps = dispatch => ({
  downloadData: () => dispatch({
    type: DOWNLOAD_DATA
  }),
  clearData: () => dispatch({
    type: CLEAR_DATA
  })
})
const connectComponent = connect( mapStateToProps, mapDispatchToProps )

export default connectComponent( ServicesScreen )