import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native'
import { Title } from 'react-native-paper'
import PieChart from './PieChart'
import Header from './Header'
import MonthPicker from './MonthPicker'
import CategoryStats from './CategoryStats'

const Stats = props => {
  let { expenses } = props

  let total = 0
  let categories = {}

  expenses.forEach(({ category, amount }) => {
    if (!categories.hasOwnProperty(category))
      categories = Object.assign(categories, {
        [category]: {
          amount
        }
      })
    else categories[category].amount = categories[category].amount + amount
    total += amount
  })

  Object.keys(categories).forEach(
    key =>
      (categories[key]['percent'] = Math.round(
        (categories[key].amount / total) * 100
      ))
  )

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
      <Header title={'Statistics'} />
      <ScrollView>
        {props.loading ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ActivityIndicator size="large" color="#000000" />
          </View>
        ) : (
          <View>
            <PieChart data={categories} />
            <Title style={{ alignItems: 'center', justifyContent: 'center' }}>
              Total Expense {`₹${total}`}
            </Title>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTopTop: 5,
                marginBottom: 5
              }}
            >
              <MonthPicker />
            </View>
            <CategoryStats navigation={props.navigation} data={categories} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  loading: state.auth.expensesLoading,
  expenses: state.expenses,
  date: state.filters.selectedDate
})

export default connect(mapStateToProps, {})(Stats)
