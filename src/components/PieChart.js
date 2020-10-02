import React from 'react'
import { Dimensions, View } from 'react-native'
import { PieChart } from 'react-native-chart-kit'

const Chart = props => {
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  }
  const colors = {
    FOOD: '#F44336',
    SOCIAL: '#3F51B5',
    SELF: '#4CAF50',
    TRANSPORTATION: '#FF9800',
    CULTURE: '#2196F3',
    HOUSEHOLD: '#E64A19',
    APPAREL: '#FFEB3B',
    BEAUTY: '#009688',
    HEALTH: '#607D8B',
    EDUCATION: '#673AB7',
    GIFT: '#9C27B0',
    OTHER: '#795548'
  }

  let data = []
  for ([key, value] of Object.entries(props.data)) {
    data.push({
      name: key,
      amount: value.amount,
      color: colors[key],
      legendFontColor: '#7F7F7F',
      legendFontSize: 14
    })
  }

  return data.length === 0 ? (
    <View></View>
  ) : (
    <PieChart
      data={data}
      width={screenWidth}
      height={screenHeight / 3}
      chartConfig={chartConfig}
      accessor="amount"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
  )
}

export default Chart
