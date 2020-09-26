import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { HelperText, TextInput, Button } from 'react-native-paper'
import { login } from '../actions/authAction'
import { connect } from 'react-redux'
import isEmail from 'validator/lib/isEmail'

function Login({ navigation, login }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  let _onChange = (text, name) => {
    setFormData({
      ...formData,
      [name]: text
    })
  }

  const onLogin = () => {
    if (formData.email.length === 0 || formData.password.length === 0)
      return alert('Please fill the rquired Fields')
    login(formData)
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
          textContentType="password"
          secureTextEntry={true}
          label="Password"
          value={formData.password}
          onChangeText={text => _onChange(text, 'password')}
        />
        <HelperText type="error" visible={hasErrors('password')}>
          {formData.password.length == 0 ? `Password is required` : ``}
        </HelperText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Button
          style={{
            backgroundColor: '#00a2ed',
            width: '80%'
          }}
          mode="contained"
          onPress={onLogin}
        >
          Login
        </Button>
      </View>
    </View>
  )
}

export default connect(null, { login })(Login)
