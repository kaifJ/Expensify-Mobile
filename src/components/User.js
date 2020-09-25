import React from 'react'
import { View, Button } from 'react-native'
import { logout } from '../actions/authAction'
import { connect } from 'react-redux'

const User = ({ logout }) => {
  const onLogout = () => {
    logout()
  }
  return (
    <View style={{ paddingTop: 100 }}>
      <Button
        onPress={onLogout}
        title="LogOut"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

export default connect(null, { logout })(User)
