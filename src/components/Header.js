import React from 'react'
import { View, Text } from 'react-native'
import { Appbar } from 'react-native-paper'

const Header = props => {
  return (
    <Appbar.Header style={{ backgroundColor: 'black' }}>
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  )
}

export default Header
