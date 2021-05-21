import React from 'react'

// Import Libraries
import { Image, StyleSheet } from 'react-native'

const ShipcomLogo = () => (
  <Image
    style={styles.logo}
    source={require('src/assets/shipcom-logo.png')}
  />
)

const styles = StyleSheet.create({
  logo: {
    maxWidth: 325,
    maxHeight: 72,
    height: '100%',
    width: '100%',
    marginBottom: 10
  }
})

export default ShipcomLogo