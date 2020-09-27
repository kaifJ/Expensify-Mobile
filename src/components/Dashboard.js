import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Provider, Portal, Modal, Button, Appbar } from 'react-native-paper'
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

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'
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
          <Appbar.Header>
            <Appbar.Content title="Title" subtitle={'Subtitle'} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
            <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
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
              marginTop: '5%',
              height: '90%',
              width: '100%'
            }}
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
              Close
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
