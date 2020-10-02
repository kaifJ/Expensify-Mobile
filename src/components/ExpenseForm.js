import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button, TextInput, HelperText, Card } from 'react-native-paper'
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
    if (
      this.state.amount.length === 0 ||
      this.state.description.length === 0 ||
      this.state.category.length == 0
    )
      return alert('Please fill the required fields')
    this.setState({ buttonLoading: true })

    let formData = {
      title: this.state.title,
      description: this.state.description,
      amount: this.state.amount,
      date: this.state.date.format(),
      category: this.state.category
    }

    this.props.formType === 'edit'
      ? this.props.editExpense(formData, this.props.expense._id)
      : this.props.addExpense(formData, this.props.selectedDate)
  }

  hasErrors = field => {
    return this.state[field].length === 0
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
        label: 'TRANSPORT',
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
        label: 'APPAREL',
        value: 'apparel'
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

    let buttonText = this.props.formType === 'edit' ? 'UPDATE' : 'ADD'

    return (
      <Card
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          padding: 0
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <View>
            <View style={{ marginTop: 5, alignItems: 'center' }}>
              <Button
                style={{
                  backgroundColor: '#4CAF50',
                  width: '60%'
                }}
                loading={this.state.buttonLoading}
                mode="contained"
                onPress={this.onFormSubmit}
              >
                <Text
                  style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}
                >
                  {buttonText}
                </Text>
              </Button>
            </View>
          </View>
          <View style={{ paddingLeft: 10 }}>
            <View>
              <TextInput
                style={{
                  fontSize: 14,
                  height: 50,
                  width: '80%',
                  backgroundColor: '#D3D3D3'
                }}
                // mode="outlined"
                label="Amount"
                theme={{
                  // roundness: 50,
                  colors: {
                    text: 'black'
                  }
                }}
                keyboardType="number-pad"
                value={`${this.state.amount}`}
                onChange={value =>
                  this.setState({ amount: value.nativeEvent.text })
                }
              />
              <HelperText type="error" visible={this.hasErrors('amount')}>
                Amount is required
              </HelperText>
            </View>
            <View>
              <TextInput
                style={{
                  fontSize: 14,
                  height: 50,
                  width: '80%',
                  backgroundColor: '#D3D3D3'
                }}
                theme={{
                  colors: {
                    text: 'black'
                  }
                }}
                label="Title"
                value={`${this.state.title}`}
                onChange={value =>
                  this.setState({ title: value.nativeEvent.text })
                }
              />
              <HelperText type="error" visible={false}>
                Title is required
              </HelperText>
            </View>
            <View>
              <TextInput
                style={{
                  fontSize: 14,
                  height: 50,
                  width: '80%',
                  backgroundColor: '#D3D3D3'
                }}
                label="Description"
                theme={{
                  colors: {
                    text: 'black'
                  }
                }}
                value={`${this.state.description}`}
                onChange={value =>
                  this.setState({ description: value.nativeEvent.text })
                }
              />
              <HelperText type="error" visible={this.hasErrors('description')}>
                Description is required
              </HelperText>
            </View>
            <View>
              <DatePicker
                style={{
                  width: 200,
                  backgroundColor: '#D3D3D3',
                  marginLeft: '1%'
                }}
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
              <HelperText type="error" visible={this.hasErrors('date')}>
                Date is required
              </HelperText>
            </View>
            <View>
              <DropDownPicker
                items={categoryData}
                containerStyle={{
                  height: '25%',
                  width: '80%'
                }}
                dropDownMaxHeight={'20%'}
                defaultValue={this.state.category}
                placeholder="Select Category"
                style={{
                  backgroundColor: '#D3D3D3'
                }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#D3D3D3' }}
                onChangeItem={item => this.setState({ category: item.value })}
              />
              <HelperText type="error" visible={this.hasErrors('category')}>
                Category is required
              </HelperText>
            </View>
          </View>
        </View>
      </Card>
    )
  }
}

const maptStateToProps = (state, props) => {
  return {
    expense:
      state.expenses.length > 0 &&
      state.expenses.find(expense => expense._id === props.modalId),
    formType: props.formType,
    selectedDate: state.filters.selectedDate
  }
}

export default connect(maptStateToProps, { addExpense, editExpense })(
  ExpenseForm
)
