import React, { useState } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { sortFilters, searchFilters } from '../actions/filterAction'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, Searchbar, Appbar } from 'react-native-paper'

const DashboardHeader = props => {
  const [searchQuery, setSearchQuery] = React.useState(props.filters.text)

  if (searchQuery !== props.filters.text) setSearchQuery(props.filters.text)

  let toggleDateFilter = () => {
    props.sortFilters({
      sortBy: 'date',
      sortIn: sortIn ? sortIn * -1 : 1
    })
  }

  let toggleAmountFilter = () => {
    props.sortFilters({
      sortBy: 'amount',
      sortIn: sortIn ? sortIn * -1 : 1
    })
  }

  const onChangeSearch = query => {
    setSearchQuery(query)
    props.searchFilters({
      text: query
    })
  }

  const { sortBy, sortIn } = props.filters

  let amountIcon = '',
    dateIcon = ''
  if (sortBy && sortBy === 'amount') {
    amountIcon = sortIn === -1 ? 'arrow-up' : 'arrow-down'
  } else if (sortBy && sortBy === 'date') {
    dateIcon = sortIn === -1 ? 'arrow-up' : 'arrow-down'
  }

  return (
    <Appbar.Header style={{ backgroundColor: 'black' }}>
      <Searchbar
        style={{
          backgroundColor: '#D3D3D3',
          width: '50%',
          height: '80%',
          marginRight: 5
        }}
        theme={{
          colors: {
            text: 'black'
          }
        }}
        placeholder="Search"
        // onIconPress={_onSearch}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Button
        icon={() => <Icon name={amountIcon} size={14} color="black" />}
        style={{
          backgroundColor: '#D3D3D3',
          height: '80%',
          width: '23%',
          marginLeft: 0,
          marginRight: 0,
          justifyContent: 'center',
          marginRight: 5
        }}
        onPress={toggleAmountFilter}
        mode="contained"
      >
        <Text style={{ fontSize: 10, color: 'black' }}>Amount</Text>
      </Button>
      <Button
        icon={() => <Icon name={dateIcon} size={14} color="black" />}
        style={{
          backgroundColor: '#D3D3D3',
          height: '80%',
          width: '23%',
          marginLeft: 0,
          marginRight: 0,
          justifyContent: 'center',
          marginRight: 1
        }}
        theme={{
          colors: {
            icon: 'black'
          }
        }}
        onPress={toggleDateFilter}
        mode="contained"
      >
        <Text style={{ fontSize: 10, color: 'black' }}>Date</Text>
      </Button>
    </Appbar.Header>
  )
}

const mapStateToProps = state => ({
  filters: state.filters
})

export default connect(mapStateToProps, {
  sortFilters,
  searchFilters
})(DashboardHeader)
