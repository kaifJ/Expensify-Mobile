import { TOGGLE_MODAL } from '../reducers/types'

export const toggleModal = ({ toggle, modalId, formType }) => dispatch => {
  dispatch({
    type: TOGGLE_MODAL,
    toggle,
    modalId,
    formType
  })
}
