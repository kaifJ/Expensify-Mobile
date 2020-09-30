import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import setAuthToken from './src/utils/setAuthToken'
import { Login, Register, Dashboard, Stats, User } from './src/components'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import { Snackbar } from 'react-native-paper'
import { loadExpenses } from './src/actions/expenseAction'
import Ionicons from 'react-native-vector-icons/Ionicons'

class App extends Component {
  state = {
    token: this.props.token,
    loading: this.props.token || true,
    isAuthenticated: this.props.isAuthenticated
  }

  async init() {
    try {
      let userToken = await AsyncStorage.getItem('token')
      userToken = userToken === undefined || userToken === null ? '' : userToken
      if (userToken) this.props.loadExpenses()
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
    const Tab = createBottomTabNavigator()

    if (this.state.loading || this.props.loading)
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#DCDCDC'
          }}
        >
          <ActivityIndicator size="large" color="#000000" />
          <Snackbar
            visible={this.state.loading || this.props.loading}
            duration={5000}
          >
            Loading...
          </Snackbar>
        </View>
      )
    jsxToReturn = !(this.state.token || this.props.token) ? (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'Login') {
                iconName = focused ? 'log-in' : 'log-in-outline'
              } else if (route.name === 'Register') {
                iconName = focused ? 'person-add' : 'person-add-outline'
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {
              fontSize: 15,
              margin: 0,
              padding: 0
            }
          }}
        >
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'Dashboard') {
                iconName = focused ? 'list-circle' : 'list-circle-outline'
              } else if (route.name === 'Stats') {
                iconName = focused ? 'stats-chart' : 'stats-chart-outline'
              } else if (route.name === 'User') {
                iconName = focused ? 'settings' : 'settings-outline'
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {
              fontSize: 15,
              margin: 0,
              padding: 0
            }
          }}
        >
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

export default connect(mapStateToProps, { loadExpenses })(App)
