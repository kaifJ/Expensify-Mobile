import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { login } from '../actions/authAction'
import { connect } from 'react-redux'

function Login({ navigation, login }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  let _onChange = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.nativeEvent.text
    })
  }

  const onLogin = () => {
    let f = formData
    debugger
    login(formData)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        id="email"
        autoCapitalize="none"
        placeholder={'Email'}
        value={formData.email}
        onChange={e => _onChange(e, 'email')}
      />
      <TextInput
        id="password"
        value={formData.password}
        autoCapitalize="none"
        onChange={e => _onChange(e, 'password')}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={onLogin} />
    </View>
  )
}

export default connect(null, { login })(Login)
