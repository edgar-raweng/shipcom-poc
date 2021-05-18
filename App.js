import React from 'react'

// Import core libraries
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json'

// Import Screen
import {
  HomeScreen
} from 'src/screen'

const App = () => {

  return (
    <PaperProvider>
      <HomeScreen/>
    </PaperProvider>
  )

}

export default App

AppRegistry.registerComponent( appName, () => App )