import React, { useEffect } from 'react'

// Import Libraries
import { View } from 'react-native'
import DB from 'react-native-sqlcipher'

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

// Data
import { consentText } from 'src/assets/data'

const db = DB.openDatabase({
  name: 'MainDB',
  key: 'ma*AC6th',
  location: 'default'
},
() => console.log(`All good!!`), 
( error ) => console.log(`Something went wrong!`))

const ConsentScreen = ({ navigation }) => {

  useEffect( () => {
    createTable()
  }) 

  const createTable = async () => {
    await db.transaction( async ( tx ) => {

      await tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        + "APP_DOCUMENTS "
        + "(API_NAME TEXT PRIMARY KEY, CONTENT TEXT);"
      )

    } )

    // We save data into the fresh database
    setData()
  }

  const setData = async () => {

    await db.transaction( async ( tx ) => {

      await tx.executeSql(
        "INSERT INTO APP_DOCUMENTS (API_NAME) VALUES (?)",
        [ `https://catng-dev-api-ora.azurewebsites.net/oracle/GetSrList` ]
      )

    } )

  }

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