import React from 'react'
import { View } from 'react-native'

const Divider = (props) => {
  return (
    <View
      style={{
        backgroundColor: props.color ? props.color : '#707070',
        height: 1,
        marginVertical: 5
      }} />
  )
}

export default Divider
