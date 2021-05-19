import React, { useState } from 'react'

// Import Libraries
import { Snackbar } from 'react-native-paper'

const ConnectionAlert = ( { isConnected } ) => {

  const [ visible, setVisible ] = useState( !isConnected )

  const onDismissSnackBar = () => setVisible( false )

  return(
    <Snackbar
      visible={ visible }
      onDismiss={ onDismissSnackBar }
      action={{
        label: `Close`,
        onPres: onDismissSnackBar
      }}
    >
      We don't have any connection available
    </Snackbar>
  )

}

export default ConnectionAlert