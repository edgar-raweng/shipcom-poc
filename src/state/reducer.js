// Import store
import { DOWNLOAD_DATA, CLEAR_DATA } from './actionTypes'
import initialState from './initialState'

// Import helpers
import { fetchApi } from 'src/utils'

export const reducer = ( state = initialState, action ) => {

  switch ( action.type ) {

    case DOWNLOAD_DATA:
      return { ...initialState }
    case CLEAR_DATA:
      return { ...state, records: [] }
    default:
      return state

  }

}

// Download data reducer
export const downloadServices = () => async ( dispatch, getState ) => {

  const axios = await fetchApi()

  //console.log('THIS IS SPARTA ===>', axios)

  dispatch( { type: DOWNLOAD_DATA } )

}