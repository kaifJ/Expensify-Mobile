import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { register } from '../actions/authAction'
import isEmail from 'validator/lib/isEmail'

function Register({ navigation, register }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  })

  let onRegister = () => {
    if (!isEmail(formData.email)) alert('Please Enter a valid email id')
    if (formData.password1 !== formData.password2) {
      alert('Passwords Do not match')
    } else {
      register({
        email: formData.email,
        name: formData.username,
        password: formData.password1
      })
    }
  }

  let _onChange = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.nativeEvent.text
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        id="username"
        placeholder={'UserName'}
        value={formData.username}
        onChange={e => _onChange(e, 'username')}
      />
      <TextInput
        id="email"
        value={formData.email}
        autoCapitalize="none"
        onChange={e => _onChange(e, 'email')}
        placeholder={'Email'}
      />
      <TextInput
        id="password1"
        value={formData.password1}
        autoCapitalize="none"
        onChange={e => _onChange(e, 'password1')}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <TextInput
        id="password2"
        value={formData.password2}
        autoCapitalize="none"
        onChange={e => _onChange(e, 'password2')}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
      />
      <Button title="Register" onPress={onRegister} />
    </View>
  )
}

export default connect(null, { register })(Register)
