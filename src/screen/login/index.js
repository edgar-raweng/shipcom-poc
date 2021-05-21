import React from 'react'

// Import Libraries
import { View, StyleSheet } from 'react-native'

// Import Components
import {
  LinkButton,
  ShipcomLogo,
} from 'src/components'

const LoginScreen = () => (

  <View style={styles.container}>
    <ShipcomLogo />
    <LinkButton link="/Consent" text="Login" />
  </View>

)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default LoginScreen