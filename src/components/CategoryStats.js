import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/filterAction'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TouchableOpacity, Text, FlatList } from 'react-native'
import { Card, Button } from 'react-native-paper'

const CategoryStats = props => {
  let onClick = category => {
    category &&
      props.setFilter({
        text: category
      })
    props.navigation.navigate('Dashboard')
  }

  const renderItem = ({ item }) => {
    return (
      <Card style={{ marginBottom: 5, paddingLeft: 10 }}>
        <TouchableOpacity
          onPress={() => onClick(item[0])}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Button style={{ backgroundColor: '#00a2ed', marginRight: 10 }}>
            <Text style={{ color: 'black' }}>{`${item[1].percent}%`}</Text>
          </Button>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14 }}>{item[0]}</Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text style={{ fontSize: 14 }}>{`₹${item[1].amount}`}</Text>
          </View>
        </TouchableOpacity>
      </Card>
    )
  }

  let categoryData = Object.entries(props.data).sort((a, b) => {
    return a[1].amount > b[1].amount ? -1 : 1
  })

  return (
    <React.Fragment>
      {categoryData.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon name="dropbox" size={60} />
          <Text>Looks Like there are no expenses</Text>
          <Button
            style={{ backgroundColor: '#4CAF50', marginTop: 10 }}
            onPress={() => onClick(undefined)}
          >
            <Text style={{ color: 'black' }}> Add expenses</Text>
          </Button>
        </View>
      ) : (
        <FlatList
          data={categoryData}
          renderItem={renderItem}
          keyExtractor={item => item[0]}
        />
      )}
    </React.Fragment>
  )
}

export default connect(null, { setFilter })(CategoryStats)
