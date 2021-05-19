import React from 'react'

// Import Libraries
import { View, Text } from 'react-native'

// Import Components
import {
  Header,
  DynamicText
} from 'src/components'

const ConsentScreen = ( props ) => {

  console.log('THIS IS THE CONNECTION ====>', props.route)

  return (

    <View>
      <Text>
        Edgar's Page
      </Text>
      <DynamicText/>
    </View>

  )

}

export default ConsentScreen