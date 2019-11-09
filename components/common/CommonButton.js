import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler'

export default CommonButton = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.buttonStyle, props.style]}
    >
      <Text style={styles.textStyles} >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#747272',
    borderRadius: 10,
    borderColor: '#111',
    borderWidth: 1,
  },
  textStyles: {
    color: '#666'
  }
})
