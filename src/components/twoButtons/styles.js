import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  viewContainer: {
    position: `absolute`,
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: Platform.OS === `ios` ? 20 : 0
  },
  // Buttons
  buttonsWrapper: {
    flexDirection: `row`,
    padding: 10
  },
  buttonFirstContainer: {
    flex: 1,
    marginRight: 2
  },
  buttonSecondContainer: {
    flex: 1,
    marginLeft: 2
  }
})