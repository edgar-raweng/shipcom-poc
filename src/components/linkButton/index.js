import React from 'react'

import { StyleSheet, Dimensions } from 'react-native'
import { Link } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const LinkButton = ( { link, text } ) => {

  return (
    <Link to={link}>
      <Button
        style={styles.button}
        mode={ `contained` }
      >
        {text}
      </Button>
    </Link>
  )
  
}

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width * 0.90
  }
})

export default LinkButton