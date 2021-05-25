import React from 'react'

// Import Libraries
import { View } from 'react-native'

// Import Components
import {
  LinkButton,
  ShipcomLogo,
} from 'src/components'

// Import Styles
import styles from './styles'

const LoginScreen = () => (

  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <ShipcomLogo isLarge={true}/>
    </View>
    <LinkButton link="/Consent" text="Login" />
  </View>

)


export default LoginScreen