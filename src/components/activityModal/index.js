import React, { useState } from 'react'

import {
  ActivityIndicator,
  Colors,
  Portal,
  Dialog
} from 'react-native-paper'

const ActivityModal = ({ open }) => {

  const [ visible, setVisible ] = useState( open )
  const showDialog = () => setVisible( true )
  const hideDialog = () => setVisible( false )

  return (
    <Portal>
      <Dialog
        visible={ visible }
        onDismiss={ hideDialog }
      >
        <Dialog.Title>
          Confirm
        </Dialog.Title>

        <Dialog.Content>
          <ActivityIndicator
            animating
            color={ Colors.purple800 }
          />
        </Dialog.Content>
      </Dialog>
    </Portal>
  )

}

ActivityModal.defaultProps = {
  open: false
}

export default ActivityModal