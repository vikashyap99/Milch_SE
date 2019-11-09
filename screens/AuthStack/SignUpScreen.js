import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import Colors from '../../constants/Colors'
import { MonoText } from '../../components/common/StyledText'
import SignUpForm from '../../components/auth/signup/SignUpForm'
import { TouchableOpacity } from 'react-native-gesture-handler';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} >
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
          <View style={styles.signUpLogoStyles} >
            <MonoText style={{ fontSize: 30 }} >
              SignUp
            </MonoText>
          </View>
          <View style={styles.signUpFormStyles} >
            <SignUpForm />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.signInLinkContainer} >
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SignIn')
          }} >
            <Text style={styles.signInLink} >
              Login
          </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  signUpFormStyles: {
    marginVertical: 10,
    marginHorizontal: 50
  },
  signUpLogoStyles: {
    margin: 10,
    fontSize: 40,
    alignItems: 'center'
  },
  signInLinkContainer: {
    margin: 40,
    alignItems: 'center'
  },
  signInLink: {
    fontSize: 15,
    textDecorationLine: 'underline',
  }
});

export default SignUpScreen
