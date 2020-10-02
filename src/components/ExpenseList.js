import React from 'react'
import { connect } from 'react-redux'
import Fab from './Fab'
// import SearchBar from './Searchbar'
import moment from 'moment'
import { toggleModal } from '../actions/modalAction'
import { deleteExpense } from '../actions/expenseAction'
import { View, Text, FlatList, SafeAreaView, Alert } from 'react-native'
import { Card, Title, Button, Divider } from 'react-native-paper'
import ExpenseFilter from './ExpenseFilter'
import Icon from 'react-native-vector-icons/FontAwesome'

const ExpenseList = props => {
  let renderItem = ({ item }) => {
    let editForm = () => {
      props.toggleModal({ toggle: true, modalId: item._id, formType: 'edit' })
    }

    let onDelete = () => {
      Alert.alert('Delete Expense ?', '', [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => props.deleteExpense(item._id)
        }
      ])
    }

    return (
      <View style={{ flexDirection: 'column' }}>
        <Card
          style={{
            marginVertical: 5,
            backgroundColor: 'white'
          }}
        >
          <Card.Content style={{ padding: 0 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end'
              }}
            >
              <View style={{ flex: 0.8 }}>
                <Text>{item.category}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Title style={{ color: 'black' }}>{`₹${item.amount}`}</Title>
                <Text>{moment(item.date).format('ddd MMM DD YYYY')}</Text>
                <Text>{item.description}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end'
                }}
              >
                <Button
                  style={{
                    backgroundColor: '#00a2ed',
                    marginBottom: 10,
                    width: '100%'
                  }}
                  mode="contained"
                  onPress={editForm}
                >
                  <Text
                    style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}
                  >
                    Edit
                  </Text>
                </Button>
                <Button
                  style={{ backgroundColor: '#f44336', width: '100%' }}
                  mode="contained"
                  onPress={onDelete}
                >
                  <Text
                    style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}
                  >
                    Delete
                  </Text>
                </Button>
              </View>
            </View>
          </Card.Content>
        </Card>
        <Divider style={{ backgroundColor: 'white' }} />
      </View>
    )
  }

  let expenses = props.expenses || []
  if (expenses.length === 0) {
    return (
      <View>
        <Fab />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="dropbox" size={60} />
          <Text>OOPS! Looks Like there are no expenses</Text>
        </View>
      </View>
    )
  } else {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
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
  expenses: ExpenseFilter(state.expenses, state.filters),
  loading: state.auth.expensesLoading
})

export default connect(mapStateToProps, { toggleModal, deleteExpense })(
  ExpenseList
)
