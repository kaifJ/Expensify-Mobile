import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import Header from './Header'
import { connect } from 'react-redux'
import ExpenseList from './ExpenseList'

const Dashboard = props => {
  return (
    <View
      style={{ flex: 1, flexDirection: 'column', backgroundColor: '#4CAF50' }}
    >
      <Header title={'Dashboard'} />

      {props.loading ? (
        <View>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      ) : (
        <ExpenseList />
      )}
    </View>
  )
}

const mapStateToProps = state => ({
  loading: state.auth.expensesLoading
})

export default connect(mapStateToProps)(Dashboard)
