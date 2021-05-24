import DB from 'react-native-sqlcipher'

const dataBase = ( dbName, dbKey, dbLocation ) => {

  const dbConfig = {
    name: dbName,
    key: dbKey,
    location: dbLocation
  }
  
  const onSuccess = () => { console.log( `Yeah, all good! ====>` ) }
  const onError = () => {}

  const db = DB.openDatabase( dbConfig, onSuccess, onError )

  return db

}

export default dataBase