import React from 'react'

// Import Libraries
import { Image, View } from 'react-native'

// Import Styles
import styles from './styles'

const ShipcomLogo = ( { isLarge } ) => (

  <View style={ styles.logoContainer }>
    <Image
      style={ isLarge ? styles.logoLarge : styles.logoMedium }
      source={require('src/assets/shipcom-logo.png')}
    />
  </View>

)

export default ShipcomLogo