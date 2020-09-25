/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import store from './src/store/store'
import { Provider } from 'react-redux'
import { name as appName } from './app.json'

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root)
