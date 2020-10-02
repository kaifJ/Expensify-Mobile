import {
  SORT_FILTERS,
  RESET_FILTERS,
  SEARCH_FILTERS,
  SET_FILTER
} from '../reducers/types'
import moment from 'moment'

const initialState = {
  sortBy: null,
  sortIn: null,
  text: '',
  textFieldToSearch: null,
  selectedDate: moment()
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        ...action.payload
      }

    case SEARCH_FILTERS:
      return {
        ...state,
        text: action.payload.text,
        textFieldToSearch: action.payload.textFieldToSearch
      }

    case RESET_FILTERS:
      return {
        ...state,
        sortBy: null,
        sortIn: null,
        text: '',
        textFieldToSearch: null
      }

    case SORT_FILTERS:
      return {
        ...state,
        sortBy: action.payload.sortBy,
        sortIn: action.payload.sortIn
      }
    default:
      return state
  }
}
