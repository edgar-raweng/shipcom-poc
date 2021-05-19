import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 40 : 0
  }
})