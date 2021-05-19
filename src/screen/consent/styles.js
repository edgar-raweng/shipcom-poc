import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 10
  },
  logo: {
    maxWidth: 325,
    maxHeight: 72,
    height: '100%',
    width: '100%',
  }
})