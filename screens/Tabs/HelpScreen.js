import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import Button from '../../components/common/CommonButton';
import { MonoText } from '../../components/common/StyledText';
import { ScrollView } from 'react-native-gesture-handler';

class HelpScreen extends Component {

  static navigationOptions = {
    title: 'Help'
  }

  render() {
    return (
      <ScrollView style={styles.scrollViewStyle} >
        <MonoText style={styles.heading} >Milch</MonoText>
        <Text style={styles.text} >
          We at Milch Organization is dedicated to working with Dairy. We are working to create the world largest community of intellectuals and rational thinkers to come together to participate in the process.
        </Text>
        {/* <Button style={styles.button} title="Be a part of PencilPen" onPress={() => {
          this.props.navigation.navigate('Donate')
        }} />
        <Button style={styles.button} title="All Donations" onPress={() => {
          this.props.navigation.navigate('AllDonations')
        }} /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 30,
    marginVertical: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 30
  },
  button: {
    marginVertical: 10
  }
});

export default HelpScreen;
