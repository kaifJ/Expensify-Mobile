import { AsyncStorage } from 'react-native'

export default async function(token){
    await AsyncStorage.setItem('token', token)
}