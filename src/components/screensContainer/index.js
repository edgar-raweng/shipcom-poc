import React, { useEffect } from "react"

// Import core libraries
import NetInfo from '@react-native-community/netinfo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RNBootSplash from "react-native-bootsplash";

// State
import { connect } from 'react-redux'
import { SET_NET_INFO } from 'src/state/actionTypes'


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

const ScreensContainer = ( { netInfo, setNetInfo } ) => {

  useEffect( () => {

    const init = async () => {

      NetInfo.addEventListener(( state ) => {

        setNetInfo( state )

      })

    }

    init().finally( async () => {
      await RNBootSplash.hide({ fade: true });
    } )

  }, [] )

  return (
    <>
    <NavigationContainer>
          <Stack.Navigator
            initialRouteName={ `Consent` }
            headerMode={ `none` }
          >
            <Stack.Screen
              name={ `Services` }
              component={ ServicesScreen }
            />

            <Stack.Screen
              name={ `Consent` }
              component={ ConsentScreen }
            />

            <Stack.Screen
              name={ `Login` }
              component={ LoginScreen }
            />
          </Stack.Navigator>
        </NavigationContainer>

        {/* Check if we have connection */}
        {
          !netInfo.isConnected && !netInfo.isInternetReachable && 
          <ConnectionAlert />
        }
        </>
  )
}

const mapStateToProps = ( state ) => state
const mapDispatchToProps = dispatch => ({
  setNetInfo: ( netInfo ) => dispatch({
    type: SET_NET_INFO,
    netInfo
  })
})

const connectComponent = connect( mapStateToProps, mapDispatchToProps )

export default connectComponent( ScreensContainer )