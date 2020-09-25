import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGOUT,
  SET_LOADING
} from './types'
import setAuthToken from '../utils/setAuthToken'
import AsyncStorage from '@react-native-community/async-storage'

const initialState = {
  isAuthenticated: false,
  token: null,
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      setAuthToken(action.payload.token)
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.payload.token
      }

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT:
      // localStorage.removeItem('token')
      setAuthToken('')
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null
      }
    default:
      return state
  }
}
