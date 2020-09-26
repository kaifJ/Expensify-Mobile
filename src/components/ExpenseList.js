import React from 'react'
import { connect } from 'react-redux'
import Fab from './Fab'
// import SearchBar from './Searchbar'
import moment from 'moment'
import { toggleModal } from '../actions/modalAction'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { Card, Title, Button } from 'react-native-paper'

const ExpenseList = props => {
  let renderItem = ({ item }) => {
    let editForm = () => {
      props.toggleModal({ toggle: true, modalId: item._id, formType: 'edit' })
    }

    return (
      <Card style={{ marginVertical: 5, backgroundColor: '#DCDCDC' }}>
        <Card.Content>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}
          >
            <View style={{ flex: 1 }}>
              <Title>{`₹${item.amount}`}</Title>
              <Text>{moment(item.date).format('ddd MMM DD YYYY')}</Text>
              <Text>{item.description}</Text>
              <Text>{item.category}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Button
                style={{ backgroundColor: '#00a2ed', marginBottom: 10 }}
                mode="contained"
                onPress={editForm}
              >
                Edit
              </Button>
              <Button
                style={{ backgroundColor: '#f44336' }}
                mode="contained"
                onPress={() => alert('Delete')}
              >
                Delete
              </Button>
            </View>
          </View>
        </Card.Content>
      </Card>
    )
  }

  let expenses = props.expenses || []
  if (expenses.length === 0) {
    return (
      <View>
        <Fab />
        <Text>Add Expense To get Started</Text>
      </View>
    )
  } else {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
        {/* <SearchBar /> */}

        <Fab />
        <FlatList
          data={expenses}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
  loading: state.auth.expensesLoading
})

export default connect(mapStateToProps, { toggleModal })(ExpenseList)