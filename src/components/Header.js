import React from 'react'
import { View, Text } from 'react-native'

const Header = props => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        height: 80,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Text style={{ color: 'white', fontSize: 18 }}>{props.title}</Text>
    </View>
  )
}

export default Header
