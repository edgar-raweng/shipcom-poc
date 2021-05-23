import React from 'react'

// Import Styles
import styles from './styles'

// Import Libraries
import { View } from 'react-native'

const TwoButtons = ({ firstButton, secondButton }) => {

  return (

    <View style={ styles.viewContainer }>
      <View style={ styles.buttonsWrapper }>
        <View style={ styles.buttonFirstContainer }>
          {
            firstButton
          }
        </View>
        <View style={ styles.buttonSecondContainer }>
          {
            secondButton
          }
        </View>
      </View>
    </View>

  )

}

export default TwoButtons