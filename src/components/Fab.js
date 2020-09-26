import React from 'react'
import { FAB } from 'react-native-paper'
import { connect } from 'react-redux'
import { toggleModal } from '../actions/modalAction'

const Fab = ({ toggleModal }) => {
  const showModal = () => {
    toggleModal({ toggle: true })
  }

  return (
    <FAB
      style={{
        backgroundColor: '#555555',
        margin: 16,
        right: 0,
        bottom: 0
      }}
      animated
      label="Add Expense"
      onPress={showModal}
    />
  )
}

export default connect(null, { toggleModal })(Fab)
