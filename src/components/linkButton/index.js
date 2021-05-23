import React from 'react'

import { StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const LinkButton = ( { link, text } ) => {

  return (
    <Link to={link}>
      <Button
        mode={ `contained` }
      >
        {text}
      </Button>
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