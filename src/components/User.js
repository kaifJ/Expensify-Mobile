import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import Header from './Header'
import { logout } from '../actions/authAction'
import { connect } from 'react-redux'

const User = ({ logout }) => {
  const [loading, setLoading] = React.useState(false)

  const onLogout = () => {
    setLoading(true)
    logout()
  }
  return (
    <View>
      <Header title={'User'} />
      <View
        style={{
          marginTop: '50%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button
          loading={loading}
          icon="logout"
          style={{
            backgroundColor: '#00a2ed',
            width: '80%'
          }}
          mode="contained"
          onPress={onLogout}
        >
          <Text style={{ fontSize: 18 }}>Logout</Text>
        </Button>
      </View>
    </View>
  )
}

export default connect(null, { logout })(User)
