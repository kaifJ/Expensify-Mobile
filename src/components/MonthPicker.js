import React, { useState } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { loadMonthlyExpenses } from '../actions/expenseAction'
import { setFilter } from '../actions/filterAction'
import { IconButton, Button } from 'react-native-paper'
import { Text } from 'react-native'

const MonthPicker = props => {
  const [startDate, setStartDate] = useState(
    new Date(props.filter.selectedDate)
  )

  const nextMonth = () => {
    let nextMonth = moment(startDate).add(1, 'months')

    props.loadMonthlyExpenses({
      year: nextMonth.year(),
      month: nextMonth.month()
    })

    setStartDate(nextMonth)

    props.setFilter({
      selectedDate: nextMonth
    })
  }

  const previousMonth = () => {
    let nextMonth = moment(startDate).subtract(1, 'months')

    props.loadMonthlyExpenses({
      year: nextMonth.year(),
      month: nextMonth.month()
    })

    setStartDate(nextMonth)

    props.setFilter({
      selectedDate: nextMonth
    })
  }
  return (
    <React.Fragment>
      <IconButton
        style={{ backgroundColor: '#808080' }}
        icon="arrow-left"
        color={'black'}
        size={16}
        onPress={previousMonth}
      />
      <Button
        style={{
          backgroundColor: '#808080',
          borderRadius: 20
        }}
        theme={{
          colors: {
            text: 'white'
          }
        }}
      >
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
          {moment(startDate).format('MMM YY')}
        </Text>
      </Button>
      <IconButton
        style={{ backgroundColor: '#808080' }}
        icon="arrow-right"
        color={'black'}
        size={16}
        onPress={nextMonth}
      />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  filter: state.filters
})

export default connect(mapStateToProps, { setFilter, loadMonthlyExpenses })(
  MonthPicker
)
