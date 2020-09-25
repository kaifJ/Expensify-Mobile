import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'

function Register({ navigation }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        id="usename"
        placeholder={'UserName'}
        value={formData.email}
        onChange={e => _onChange(e, 'username')}
      />
      <TextInput
        id="email"
        value={formData.password}
        autoCapitalize="none"
        onChange={e => _onChange(e, 'email')}
        placeholder={'Email'}
        secureTextEntry={true}
      />
      <TextInput
        id="password1"
        value={formData.password}
        autoCapitalize="none"
        onChange={e => _onChange(e, 'password1')}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <TextInput
        id="password2"
        value={formData.password}
        autoCapitalize="none"
        onChange={e => _onChange(e, 'password2')}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
      />
      <Button title="Register" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default Register
