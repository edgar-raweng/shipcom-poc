import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 10
  },
  body: {
    flex: 9,
    marginBottom: 80
  },
  /*footer: {
    flex: 1,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white'
  }*/
})