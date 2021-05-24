import React from 'react'

// Import Libraries
import { Image, View } from 'react-native'

// Import Styles
import styles from './styles'

const ShipcomLogo = () => (

  <View style={ styles.logoContainer }>
    <Image
      style={styles.logoMedium}
      source={require('src/assets/shipcom-logo.png')}
    />
  </View>

)

export default ShipcomLogo