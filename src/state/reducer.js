// Import store
import { DOWNLOAD_DATA, CLEAR_DATA, SET_NET_INFO } from './actionTypes'
import initialState from './initialState'

// Import helpers
import { fetchApi } from 'src/utils'

export const reducer = ( state = initialState, action ) => {

  switch ( action.type ) {

    case DOWNLOAD_DATA:
      return { ...initialState }
    case CLEAR_DATA:
      return { ...state, records: [] }
    case SET_NET_INFO:
      return { ...state, netInfo: action.netInfo }
    default:
      return state

  }

}

// Download data reducer
export const downloadServices = () => async ( dispatch, getState ) => {

  dispatch( { type: DOWNLOAD_DATA } )

}