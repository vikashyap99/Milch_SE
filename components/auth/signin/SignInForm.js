import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import Input from '../../common/Input';
import CommonButton from '../../common/CommonButton';
import { withNavigation } from 'react-navigation';
import firebase, { auth } from '../../../firebase/firebase.app';

class SignInForm extends Component {

  state = {
    email: "",
    password: "",
    loading: false,
    error: null
  }

  handleLogin = ({ email, password }) => {
    // TODO : Add validations and error types for email and passwords
    if (email.length <= 0 || password.length <= 0) {
      this.setState({ error: "Fields cannot be left empty !!" })
      return
    }
    this.setState({ loading: true });

    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return auth
          .signInWithEmailAndPassword(email, password)
          .then(data => this.setState({ error: null, loading: false }))
          .catch(error => this.setState({ error: error.message, loading: false }));
      });
  }

  render() {
    const { email, password, loading, error } = this.state;
    return (
      <View>
        <Input
          onChangeText={text => this.setState({ email: text, error: null })}
          keyboardType={"email-address"}
          value={email}
          placeholder={"Email"}
        />
        <Input
          onChangeText={text => this.setState({ password: text, error: null })}
          value={password}
          secureTextEntry={true}
          placeholder={"Password"}
        />
        {loading
          ? <ActivityIndicator style={{ margin: 20 }} />
          : <CommonButton title="Login" onPress={() => this.handleLogin({ email, password })} />
        }
        {error && <Text style={{ color: 'red', alignSelf: 'center' }} >{error}</Text>}
      </View>
    );
  }
}

export default withNavigation(SignInForm);
