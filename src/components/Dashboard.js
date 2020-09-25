import React from 'react'
import { View, Text } from 'react-native'
import Header from './Header'

const Dashboard = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Header title={'Dashboard'} />
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard
