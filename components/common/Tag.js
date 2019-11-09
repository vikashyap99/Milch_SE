import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default Tag = (props) => {
  return (
    <View style={styles.tag} >
      <Text>
        {props.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    margin: 2,
    marginHorizontal: 4,
    padding: 2,
    paddingHorizontal: 4,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
})
