import React from 'react'
import { View, Text } from 'react-native'
import Header from './Header'

const Stats = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Header title={'Statistics'} />
      <Text>Stats</Text>
    </View>
  )
}

export default Stats
