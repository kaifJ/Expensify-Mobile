import React from 'react'
import { View, Text } from 'react-native'

const Header = props => {
  return (
    <View
      style={{
        backgroundColor: '#20222b',
        height: 80,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
        {props.title}
      </Text>
    </View>
  )
}

export default Header
