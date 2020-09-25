import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export default async function(token){
    if(token)
        axios.defaults.headers.common['Authorization'] = token
    else 
        axios.defaults.headers.common['Authorization'] = null
    await AsyncStorage.setItem('token', token)
}