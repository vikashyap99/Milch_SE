import React, { Component } from 'react'; 
import { Text, View, ActivityIndicator } from 'react-native';
import Input from '../../common/Input';
import CommonButton from '../../common/CommonButton';
import { auth } from '../../../firebase/firebase.app';

export default class SignUpForm extends Component {

  state = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    loading: false,
    error: null
  }

  handleSignUp = ({ email, password, confirmPassword, name }) => {
    // TODO : Add validations and error types for email an passwords
    if (email.length <= 0 || password.length <= 0) {
      this.setState({ error: "Fields cannot be left empty !!" })
      return
    }
    if (password !== confirmPassword) {
      this.setState({ error: "Passwords do not match" })
      return
    }
    this.setState({ loading: true });
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        auth.currentUser.updateProfile({
          displayName: name,
        }).then(function () {
          auth.currentUser.reload()
          this.setState({ error: null, loading: false, name: "", email: "", password: "", confirmPassword: "" })
        }).catch(function (error) {
        });
      })
      .catch(error => this.setState({ error: error.message, loading: false }));
  }

  render() {
    const { email, name, password, confirmPassword, loading, error } = this.state;

    return (
      <View>
        <Input
          onChangeText={text => this.setState({ email: text, error: null })}
          keyboardType={"email-address"}
          value={email}
          placeholder={"Email"}
        />
        <Input
          onChangeText={text => this.setState({ name: text, error: null })}
          value={name}
          placeholder={"Name"}
        />
        <Input
          onChangeText={text => this.setState({ password: text, error: null })}
          value={password}
          secureTextEntry={true}
          placeholder={"Password"}
        />
        <Input
          onChangeText={text => this.setState({ confirmPassword: text, error: null })}
          value={confirmPassword}
          secureTextEntry={true}
          placeholder={"Confirm Password"}
        />
        {loading
          ? <ActivityIndicator style={{ margin: 20 }} />
          : <CommonButton title="SignUp" onPress={() => this.handleSignUp({ email, password, confirmPassword, name })} />
        }
        {error && <Text style={{ color: 'red', alignSelf: 'center' }} >{error}</Text>}
      </View>
    );
  }
}