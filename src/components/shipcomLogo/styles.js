import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  logoContainer: {
    width: Dimensions.width,
    alignItems: `center`,
    paddingBottom: 10,
    paddingTop: 10
  },
  logoMedium: {
    width: 248,
    height: 52
  },
  logoLarge: {
    width: Dimensions.get('window').width * 0.90,
    height: Dimensions.get('window').width * 0.2
  },
  logo: {
    maxWidth: 325,
    maxHeight: 72,
    height: '100%',
    width: '100%',
    marginBottom: 10
  }
})