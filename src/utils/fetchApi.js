import axios from 'axios'

const API_URL = `https://catng-dev-api-ora.azurewebsites.net/oracle/GetSrList`

const fetchApi = () => {

  return axios.get( API_URL )
            .then( response => {
              return response
            })
            .catch( error => {

              console.log('THIS IS THE ERROR ====>')
              console.log(error)

              return {}

            } )

}

export default fetchApi