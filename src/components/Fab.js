// import React from 'react'
// import { FAB } from 'react-native-paper'
// import { connect } from 'react-redux'
// import { toggleModal } from '../actions/modalAction'

// const Fab = ({ toggleModal }) => {
//   const showModal = () => {
//     toggleModal({ toggle: true })
//   }

//   return (
//     <FAB
//       style={{
//         backgroundColor: '#555555',
//         margin: 16,
//         right: 0,
//         bottom: 0
//       }}
//       animated
//       label="Add Expense"
//       onPress={showModal}
//     />
//   )
// }

// export default connect(null, { toggleModal })(Fab)

import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { connect } from 'react-redux'
import { toggleModal } from '../actions/modalAction'
import Icon from 'react-native-vector-icons/FontAwesome'

const Fab = ({ toggleModal }) => {
  const showModal = () => {
    toggleModal({ toggle: true })
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <Button
          icon={() => <Icon name="plus" size={18} color="white" />}
          style={{
            backgroundColor: '#4CAF50',
            borderRadius: 20,
            marginTop: 10,
            marginBottom: 10
          }}
          onPress={showModal}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            Add
          </Text>
        </Button>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button
          style={{
            backgroundColor: 'blue',
            borderRadius: 20,
            marginTop: 10,
            marginBottom: 10
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            Month
          </Text>
        </Button>
        <Button
          style={{
            backgroundColor: 'blue',
            borderRadius: 20,
            marginTop: 10,
            marginBottom: 10
          }}
          mode="contained"
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            Clear Filters
          </Text>
        </Button>
      </View>
    </View>
  )
}

export default connect(null, { toggleModal })(Fab)
