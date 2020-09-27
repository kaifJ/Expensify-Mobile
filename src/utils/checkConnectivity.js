import { NetInfo, Platform, Alert } from 'react-native'

const CheckConnectivity = () => {
  // For Android devices
  if (Platform.OS === 'android') {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        return
      } else {
        Alert.alert('You are offline!')
      }
    })
  } else {
    // For iOS devices
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    )
  }
}

handleFirstConnectivityChange = isConnected => {
  NetInfo.isConnected.removeEventListener(
    'connectionChange',
    this.handleFirstConnectivityChange
  )

  if (isConnected === false) {
    return
  } else {
    Alert.alert('You are online!')
  }
}

export default CheckConnectivity
