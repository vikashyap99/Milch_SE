import React from 'react'; 
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Text
} from 'react-native';
import { auth } from '../../firebase/firebase.app';
import  image from '../../assets/images/farm.jpg'

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    auth.onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'Auth')
    })
  };

  render() {
    return (
      
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
    </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthLoadingScreen
