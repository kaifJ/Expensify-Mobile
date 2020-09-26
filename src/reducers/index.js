import { combineReducers } from 'redux'
import authReducer from './authReducer'
import modalReducer from './modalReducer'
// import filterReducer from './filter'
// import alertReducer from './alert'
import expenseReducer from './expenseReducer'

export default combineReducers({
  auth: authReducer,
  expenses: expenseReducer,
  modal: modalReducer
  // filters: filterReducer,
  // alert: alertReducer,
})
