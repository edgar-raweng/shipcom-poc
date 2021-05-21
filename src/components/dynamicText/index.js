import React from 'react'

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text
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
    height: '100%'
  },
  scrollView: {
    flex: 1
  },
  text: {
    padding: 15
  }
})

export default DynamicText