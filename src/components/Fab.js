import React from 'react'
import { FAB } from 'react-native-paper'

const Fab = () => {
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
      onPress={() => alert('Pressed')}
    />
  )
}

export default Fab
