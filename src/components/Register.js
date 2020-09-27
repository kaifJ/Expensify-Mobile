import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button, HelperText } from 'react-native-paper'
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
    if (!isEmail(formData.email)) return alert('Please Enter a valid email')
    if (
      formData.username.length === 0 ||
      formData.email.length === 0 ||
      formData.password1.length === 0 ||
      formData.password2.length === 0
    )
      return alert('Please Fill all the required fields')
    if (formData.password1 !== formData.password2) {
      return alert('Passwords Do not match')
    } else {
      register({
        email: formData.email,
        name: formData.username,
        password: formData.password1
      })
    }
  }

  const _onChange = (text, name) => {
    setFormData({
      ...formData,
      [name]: text
    })
  }

  const hasErrors = field => {
    if (field === 'email') {
      return !isEmail(formData[field])
    }
    return formData[field].length === 0
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#4CAF50'
      }}
    >
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Expensify</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TextInput
          style={{ width: '90%' }}
          mode="outlined"
          label="UserName"
          textContentType="username"
          value={formData.username}
          onChangeText={text => _onChange(text, 'username')}
        />
        <HelperText type="error" visible={hasErrors('username')}>
          UserName is required
        </HelperText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TextInput
          style={{ width: '90%' }}
          mode="outlined"
          label="Email"
          autoCapitalize="none"
          textContentType="emailAddress"
          value={formData.email}
          onChangeText={text => _onChange(text, 'email')}
        />
        <HelperText type="error" visible={hasErrors('email')}>
          {formData.email.length == 0
            ? `Email is required`
            : `Email is not valid`}
        </HelperText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TextInput
          style={{ width: '90%' }}
          mode="outlined"
          textContentType="password"
          secureTextEntry={true}
          label="Password"
          value={formData.password1}
          onChangeText={text => _onChange(text, 'password1')}
        />
        <HelperText type="error" visible={hasErrors('password1')}>
          Password is required
        </HelperText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TextInput
          style={{ width: '90%' }}
          mode="outlined"
          textContentType="password"
          secureTextEntry={true}
          label="Confirm Password"
          value={formData.password2}
          onChangeText={text => _onChange(text, 'password2')}
        />
        <HelperText type="error" visible={hasErrors('password2')}>
          Password is required
        </HelperText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Button
          style={{
            backgroundColor: '#00a2ed',
            width: '80%'
          }}
          mode="contained"
          onPress={onRegister}
        >
          Register
        </Button>
      </View>
    </View>
  )
}

export default connect(null, { register })(Register)
