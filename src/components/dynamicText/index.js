import React from 'react'

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions
} from 'react-native'

const DynamicText = ( props ) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          { props.content }
          { props.content }
        </Text>
      </ScrollView>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: Dimensions.get('window').height * 0.60
  },
  scrollView: {
    flex: 1
  },
  text: {
    padding: 15
  }
})

export default DynamicText