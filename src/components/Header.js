import React from 'react'
import { View, Text } from 'react-native'

const Header = props => {
  return (
    <View
      style={{
        backgroundColor: '#20222b',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold' }}>
        {props.title}
      </Text>
    </View>
  )
}

export default Header
