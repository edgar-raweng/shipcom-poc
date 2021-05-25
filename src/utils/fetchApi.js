// Import libraries
import axios from 'axios'
import DB from 'react-native-sqlcipher'

const db = DB.openDatabase({
  name: `MainDB`,
  key: `ma*AC6th`,
  location: `default`
},
  () => console.log(`All good in the valley`),
  () => {}
)

const getUrl = async () => {

  let apiUrl

  await db.transaction( async ( tx ) => {
    await tx.executeSql(
      "SELECT API_NAME FROM APP_DOCUMENTS",
      [],
      async ( tx, results ) => {
        const len = results.rows.length
        console.log(' ARE WE HERE? ====>')
        apiUrl = len > 0 ? results.rows.item(0).API_NAME : false
      }
    )
  } )

  console.log('THIS IS IT?')

  return apiUrl

}

const fetchApi = async () => {

  const API_BASE_URL = await getUrl()

  console.log(' THIS IS THE URL ', API_BASE_URL)

  return null

  /*return await axios.get( API_BASE_URL )
            .then( response => {
              return response
            })
            .catch( error => {

              console.log('THIS IS THE ERROR ====>')
              console.log(error)

              return {}

            } )*/

}

export default fetchApi