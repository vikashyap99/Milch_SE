import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
TextInput.defaultProps.selectionColor = '#74727255'

export default Input = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.inputStyle, props.style]}
      tintColor='#74727255'
    />
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    color: '#747272',
    borderRadius: 10,
    borderColor: '#111',
    borderWidth: 1,
  }
})
