// Import store
import { DOWNLOAD_DATA, CLEAR_DATA } from './actionTypes'
import initialState from './initialState'

const reducer = ( state = initialState, action ) => {

  switch ( action.type ) {

    case DOWNLOAD_DATA:
      return { ...initialState }
    case CLEAR_DATA:
      return { ...state, records: [] }
    default:
      return state

  }

}

export default reducer