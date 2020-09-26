import { combineReducers } from 'redux'
import authReducer from './authReducer'
// import filterReducer from './filter'
// import alertReducer from './alert'
import expenseReducer from './expenseReducer'

export default combineReducers({
  auth: authReducer,
  expenses: expenseReducer
  // filters: filterReducer,
  // alert: alertReducer,
})
