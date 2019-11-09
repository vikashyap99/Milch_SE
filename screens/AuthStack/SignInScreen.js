import React from 'react' 
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'
import { MonoText } from '../../components/common/StyledText'
import SignInForm from '../../components/auth/signin/SignInForm'
import  farm3 from '../../assets/images/farm.jpg'

class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} >
       
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
          <View style={styles.signInLogoStyles} >
          
            <MonoText style={{ fontSize: 30 }} >
              Login
            </MonoText>
          </View>
          <View style={styles.signInFormStyles} >
            <SignInForm />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.signUpLinkContainer} >
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SignUp')
          }} >
            <Text style={styles.signUpLink} >
              Sign Up
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
  signInFormStyles: {
    marginVertical: 10,
    marginHorizontal: 50
  },
  signInLogoStyles: {
    margin: 10,
    fontSize: 40,
    alignItems: 'center'
  },
  signUpLinkContainer: {
    margin: 40,
    alignItems: 'center'
  },
  signUpLink: {
    fontSize: 15,
    textDecorationLine: 'underline',
  }
});

export default SignInScreen
