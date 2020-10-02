import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import { Provider, Portal, Modal } from 'react-native-paper'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import ExpenseList from './ExpenseList'
import { toggleModal } from '../actions/modalAction'
import DashboardHeadr from './DashboardHeaer'

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
            // backgroundColor: '#CCFFCC'
            backgroundColor: '#DCDCDC'
          }}
        >
          <DashboardHeadr />
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
            <ExpenseList />
          )}
          <Modal
            contentContainerStyle={{
              marginTop: '20%',
              height: '75%',
              width: '100%'
            }}
            animationType={'slide'}
            visible={visible}
            onDismiss={hideModal}
          >
            <View style={{ flex: 1, height: '90%' }}>
              <ExpenseForm
                modalId={props.modal.modalId}
                formType={props.modal.formType}
              />
            </View>
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
