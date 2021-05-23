import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react'

// Import core libraries
import NetInfo from '@react-native-community/netinfo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { name as appName } from './app.json'

// State
import { Provider as ReduxProvider } from 'react-redux'
import store from 'src/store/store'

// Import Components
import {
  ConnectionAlert
} from 'src/components'

// Import Screen
import {
  ServicesScreen,
  ConsentScreen,
  LoginScreen
} from 'src/screen'

const Stack = createStackNavigator()

const customTheme = {
  ...DefaultTheme,
  dark: true
}

const App = () => {

  const [ netInfo, setNetInfo ] = useState( false )

  useEffect( () => {

    NetInfo.addEventListener(( state ) => {

      setNetInfo( state.isConnected )

    })

  }, [] )

  return (
    <ReduxProvider store={ store }>
      <PaperProvider theme={ customTheme }>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={ `Consent` }
            headerMode={ `none` }
          >
            <Stack.Screen
              name={ `Services` }
              component={ ServicesScreen }
              options={{ isConnected: netInfo }}
            />

            <Stack.Screen
              name={ `Consent` }
              component={ ConsentScreen }
              initialParams={{ isConnected: netInfo }}
            />

            <Stack.Screen
              name={ `Login` }
              component={ LoginScreen }
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
    </ReduxProvider>
  )

}

export default App

AppRegistry.registerComponent( appName, () => App )