import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

class ProfileScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} >
        <Text>ProfileScreen</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
})

export default ProfileScreen