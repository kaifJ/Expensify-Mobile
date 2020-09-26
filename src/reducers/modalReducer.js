import { TOGGLE_MODAL } from './types'

const initialState = {
  open: false,
  modalId: null,
  formType: undefined
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        open: action.toggle,
        modalId: action.modalId,
        formType: action.formType
      }
    default:
      return {
        ...state
      }
  }
}
