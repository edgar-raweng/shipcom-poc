import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react'

// Import core libraries
import NetInfo from '@react-native-community/netinfo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json'

// Import Components
import {
  ConnectionAlert
} from 'src/components'

// Import Screen
import {
  PanelScreen,
  ConsentScreen
} from 'src/screen'

const Stack = createStackNavigator()

const App = () => {

  const [ netInfo, setNetInfo ] = useState( false )

  useEffect( () => {

    NetInfo.addEventListener(( state ) => {

      setNetInfo( state.isConnected )

    })

  }, [] )

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ `Consent` }
          headerMode={ `none` }
        >
          <Stack.Screen
            name={ `Home` }
            component={ PanelScreen }
            options={{ isConnected: netInfo }}
          />

          <Stack.Screen
            name={ `Consent` }
            component={ ConsentScreen }
            initialParams={{ isConnected: netInfo }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/* Check if we have connection */}
      {
        !netInfo && 
        <ConnectionAlert isConnected={ netInfo } />
      }
    </PaperProvider>
  )

}

export default App

AppRegistry.registerComponent( appName, () => App )