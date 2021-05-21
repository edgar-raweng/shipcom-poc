import React from 'react'

import { StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native'

const LinkButton = ( props ) => {
  const { link, text } = props
  
  return (
    <Link style={styles.button} to={link}>
      {text}
    </Link>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightgrey',
    height: 40
  }
})

export default LinkButton