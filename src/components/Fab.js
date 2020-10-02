import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { connect } from 'react-redux'
import MonthPicker from './MonthPicker'
import { toggleModal } from '../actions/modalAction'
import { resetFilters } from '../actions/filterAction'
import Icon from 'react-native-vector-icons/FontAwesome'

const Fab = props => {
  const showModal = () => {
    props.toggleModal({ toggle: true })
  }

  const resetFilters = () => {
    props.resetFilters()
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <View>
        <Button
          icon={() => <Icon name="plus" size={12} color="white" />}
          style={{
            backgroundColor: '#4CAF50',
            borderRadius: 20
          }}
          onPress={showModal}
        >
          <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
            Add
          </Text>
        </Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTopTop: 5,
          marginBottom: 5
        }}
      >
        <MonthPicker />
        <Button
          style={{
            backgroundColor: '#808080',
            borderRadius: 20
          }}
          theme={{
            colors: {
              text: 'white'
            }
          }}
          mode="contained"
          onPress={resetFilters}
        >
          <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
            Clear
          </Text>
        </Button>
      </View>
    </View>
  )
}

export default connect(null, {
  toggleModal,
  resetFilters
})(Fab)
