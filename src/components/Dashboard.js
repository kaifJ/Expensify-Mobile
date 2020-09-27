import React from 'react'
import { View, ActivityIndicator, Text, Button } from 'react-native'
import { Provider, Portal, Modal } from 'react-native-paper'
import ExpenseForm from './ExpenseForm'
import Header from './Header'
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
  return (
    <Provider>
      <Portal>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#4CAF50'
          }}
        >
          <Header title={'Dashboard'} />
          {props.loading ? (
            <View>
              <ActivityIndicator size="large" color="#000000" />
            </View>
          ) : (
            <ExpenseList />
          )}
          <Modal
            contentContainerStyle={{ height: 500, width: 500 }}
            visible={visible}
            onDismiss={hideModal}
          >
            <ExpenseForm
              modalId={props.modal.modalId}
              formType={props.modal.formType}
            />
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
