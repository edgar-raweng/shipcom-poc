import React from 'react'

// Import Libraries
import { View } from 'react-native'

// Import Components
import {
  ShipcomLogo,
  DynamicText,
  TwoButtons,
  Button
} from 'src/components'

// Import Styles
import {
  styles
} from './styles'

// Import Utils
import { dataBase } from 'src/utils'

// Data
import { consentText } from 'src/assets/data'

const ConsentScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>
      <ShipcomLogo />
      <View style={styles.body}>
        <DynamicText content={ consentText }/>
      </View>

      <TwoButtons
        firstButton={ <Button navigation={ navigation } to={ `Services` }>Accept</Button> }
        secondButton={ <Button navigation={ navigation } to={ `Login` }>Cancel</Button> }
      />
    </View>

  )

}

export default ConsentScreen