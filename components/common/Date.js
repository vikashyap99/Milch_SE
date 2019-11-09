import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const getDateFromTimestamp = (timestamp) => {
  return {
    date: '20/02/19',
    time: '7:30 PM',
    day: 'Monday'
  }
}

const Date = (props) => {
  const { date, time, day } = getDateFromTimestamp(props.timestamp)

  return (
    <View style={styles.dateContainer} >
      <Text style={styles.date} >
        {date}
      </Text>
      <Text style={styles.date} >
        {time}
      </Text>
      <Text style={styles.date} >
        {day}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    marginVertical: 10
  },
  date: {
    marginRight: 20
  }
})

export default Date
