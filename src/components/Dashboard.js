import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import {
  Provider,
  Portal,
  Modal,
  Button,
  Searchbar,
  Appbar
} from 'react-native-paper'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import ExpenseList from './ExpenseList'
import { toggleModal } from '../actions/modalAction'

const Dashboard = props => {
  const [visible, setVisible] = React.useState(props.modal.open)
  props.modal.open === true && visible === false && setVisible(true)
  props.modal.open === false && visible === true && setVisible(false)

  const hideModal = () => {
    props.toggleModal({ toggle: false })
    setVisible(false)
  }

  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = query => setSearchQuery(query)
  return (
    <Provider>
      <Portal>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            // backgroundColor: '#CCFFCC'
            backgroundColor: '#DCDCDC'
          }}
        >
          <Appbar.Header>
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
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <Button
              icon="arrow-up"
              style={{
                backgroundColor: '#D3D3D3',
                height: '80%',
                width: '23%',
                marginLeft: 0,
                marginRight: 0,
                justifyContent: 'center',
                marginRight: 5
              }}
              mode="contained"
            >
              Amount
            </Button>
            <Button
              icon="arrow-up"
              style={{
                backgroundColor: '#D3D3D3',
                height: '80%',
                width: '23%',
                marginLeft: 0,
                marginRight: 0,
                justifyContent: 'center',
                marginRight: 1
              }}
              mode="contained"
            >
              Date
            </Button>
          </Appbar.Header>
          {props.loading ? (
            <View>
              <ActivityIndicator size="large" color="#000000" />
            </View>
          ) : (
            <ExpenseList />
          )}
          <Modal
            contentContainerStyle={{
              marginTop: '25 %',
              height: '70%',
              width: '100%'
            }}
            animationType={'slide'}
            visible={visible}
            onDismiss={hideModal}
          >
            <ExpenseForm
              modalId={props.modal.modalId}
              formType={props.modal.formType}
            />
            <Button
              style={{
                backgroundColor: '#f44336'
              }}
              mode="contained"
              onPress={hideModal}
            >
              <Text
                style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}
              >
                Close
              </Text>
            </Button>
          </Modal>
        </View>
      </Portal>
    </Provider>
  )
}

const mapStateToProps = state => ({
  loading: state.auth.expensesLoading,
  modal: state.modal
})

export default connect(mapStateToProps, { toggleModal })(Dashboard)
