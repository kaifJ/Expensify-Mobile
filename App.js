import React, { useEffect, Component } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import setAuthToken from './src/utils/setAuthToken'
import { Login, Register, Dashboard, Stats, User } from './src/components'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'

class App extends Component {
  state = {
    token: this.props.token,
    loading: this.props.token,
    isAuthenticated: this.props.isAuthenticated
  }

  async init() {
    try {
      let userToken = await AsyncStorage.getItem('token')
      userToken = userToken === undefined || userToken === null ? '' : userToken

      await setAuthToken(userToken)
      this.setState({
        token: userToken,
        loading: false,
        isAuthenticated: !!userToken
      })
    } catch (e) {}
  }

  componentDidMount() {
    this.init()
  }

  _onPress = () => {
    setAuthToken('token')
  }

  render() {
    let jsxToReturn
    const Stack = createStackNavigator()
    const Tab = createBottomTabNavigator()

    if (this.state.loading || this.props.loading)
      return <Text>Loading.....</Text>

    jsxToReturn = !(this.state.token || this.props.token) ? (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Stats" component={Stats} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
      </NavigationContainer>
    )

    return jsxToReturn
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  loading: auth.loading,
  token: auth.token
})

export default connect(mapStateToProps)(App)
