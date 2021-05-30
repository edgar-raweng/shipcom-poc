import 'react-native-gesture-handler';

import React from 'react'

// Import core libraries
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { name as appName } from './app.json'

// State
import { Provider as ReduxProvider } from 'react-redux'
import store from 'src/state/store'

// Import Components
import {
  ScreensContainer
} from 'src/components'

const customTheme = {
  ...DefaultTheme,
  dark: true
}

const App = () => {

  return (
    <ReduxProvider store={ store }>
      <PaperProvider theme={ customTheme }>
        <ScreensContainer />
      </PaperProvider>
    </ReduxProvider>
  )

}

export default App

AppRegistry.registerComponent( appName, () => App )