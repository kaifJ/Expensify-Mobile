import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-paper'
import { addExpense, editExpense } from '../actions/expenseAction'
import moment from 'moment'
import DropDownPicker from 'react-native-dropdown-picker'
import DatePicker from 'react-native-datepicker'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.expense?.title || '',
      description: props.expense?.description || '',
      category:
        (props.expense && props.expense.category.toLocaleLowerCase()) || '',
      amount: props.expense?.amount || '',
      date: props.expense ? moment(props.expense.date) : moment(),
      buttonLoading: false
    }
  }

  onFormSubmit = () => {
    this.setState({ buttonLoading: true })
    debugger
    let formData = {
      title: this.state.title,
      description: this.state.description,
      amount: this.state.amount,
      date: this.state.date.format(),
      category: this.state.category
    }
    debugger
    this.props.formType === 'edit'
      ? this.props.editExpense(formData, this.props.expense._id)
      : this.props.addExpense(formData, moment())
  }

  render() {
    let categoryData = [
      {
        label: 'FOOD',
        value: 'food'
      },
      {
        label: 'SOCIAL',
        value: 'social'
      },
      {
        label: 'SELF',
        value: 'self'
      },
      {
        label: 'TRANSPORTATION',
        value: 'transportation'
      },
      {
        label: 'CULTURE',
        value: 'culture'
      },
      {
        label: 'HOUSEHOLD',
        value: 'household'
      },
      {
        label: 'FOAPPARELOD',
        value: 'fapparelood'
      },
      {
        label: 'BEAUTY',
        value: 'beauty'
      },
      {
        label: 'HEALTH',
        value: 'health'
      },
      {
        label: 'EDUCATION',
        value: 'education'
      },
      {
        label: 'GIFT',
        value: 'gift'
      },
      {
        label: 'OTHER',
        value: 'other'
      }
    ]

    let buttonText =
      this.props.formType === 'edit' ? 'EDIT EXPENSE' : 'ADD EXPENSE'

    return (
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          height: 500,
          width: 500
        }}
      >
        <TextInput
          placeholder="Amount"
          id="amount"
          value={`${this.state.amount}`}
          onChange={value => this.setState({ amount: value.nativeEvent.text })}
        />
        <TextInput
          placeholder="Title"
          id="title"
          value={this.state.title}
          onChange={value => this.setState({ title: value.nativeEvent.text })}
        />
        <TextInput
          placeholder="Description"
          id="description"
          value={this.state.description}
          onChange={value =>
            this.setState({ description: value.nativeEvent.text })
          }
        />
        <DropDownPicker
          items={categoryData}
          containerStyle={{ height: 40, width: '50%' }}
          placeholder="Select Category"
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={item => this.setState({ category: item.value })}
        />
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={date => {
            this.setState({ date: moment(date, 'DD-MM-YYYY') })
          }}
        />
        <Button
          loading={this.state.buttonLoading}
          style={{ backgroundColor: '#00a2ed', marginBottom: 10 }}
          mode="contained"
          onPress={this.onFormSubmit}
        >
          {buttonText}
        </Button>
      </View>
    )
  }
}

const maptStateToProps = (state, props) => {
  return {
    expense:
      state.expenses.length > 0 &&
      state.expenses.find(expense => expense._id === props.modalId),
    formType: props.formType
    // selectedDate: state.filters.selectedDate
  }
}

export default connect(maptStateToProps, { addExpense, editExpense })(
  ExpenseForm
)
