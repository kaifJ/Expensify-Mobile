import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  SET_LOADING,
  SET_EXPENSE_LOADING
} from '../reducers/types'
import axios from 'axios'
import { loadExpenses } from '../actions/expenseAction'

export const register = ({ name, email, password }) => async dispatch => {
  dispatch({
    type: 'SET_LOADING',
    loading: true
  })
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, email, password })

  try {
    const res = await axios.post(
      'https://calm-hollows-17096.herokuapp.com/api/user',
      body,
      config
    )

    dispatch({
      type: 'SET_LOADING',
      loading: false
    })
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { token: res.data.token }
    })
    dispatch(loadExpenses())
  } catch (error) {
    const errorMsg = error.response.data
    // dispatch(setAlert(errorMsg, 'danger'))

    dispatch({
      type: REGISTER_FAILURE
    })
  }
}

export const login = ({ email, password }) => async dispatch => {
  dispatch({
    type: 'SET_LOADING',
    loading: true
  })
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password })
  try {
    const res = await axios.post(
      'https://calm-hollows-17096.herokuapp.com/api/auth',
      body,
      config
    )

    dispatch({
      type: 'SET_LOADING',
      loading: false
    })

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token: res.data.token }
    })
    dispatch(loadExpenses())
  } catch (error) {
    const errorMsg = error.response.data
    // dispatch(setAlert(errorMsg, 'danger'))

    dispatch({
      type: LOGIN_FAILURE
    })
  }
}

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT
  })
  try {
    await axios.post('https://calm-hollows-17096.herokuapp.com/api/user/logout')
  } catch (error) {
    //    dispatch(setAlert('Could Not Log Out Please check '))
  }
}

export const setLoading = loading => dispatch => {
  dispatch({
    type: SET_LOADING,
    loading
  })
}

export const setExpenseLoading = loading => dispatch => {
  dispatch({
    type: SET_EXPENSE_LOADING,
    loading
  })
}
