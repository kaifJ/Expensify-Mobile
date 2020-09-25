import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Header from './Header'
import { connect } from 'react-redux'

const Dashboard = props => {
  return (
    <View
      style={{ flex: 1, flexDirection: 'column', backgroundColor: 'green' }}
    >
      <Header title={'Dashboard'} />
      {props.loading ? (
        <View>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      ) : (
        <Text>Dashboard</Text>
      )}
    </View>
  )
}

const mapStateToProps = state => ({
  loading: state.auth.expensesLoading
})

export default connect(mapStateToProps)(Dashboard)
