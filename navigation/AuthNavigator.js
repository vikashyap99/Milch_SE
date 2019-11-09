import { createSwitchNavigator } from 'react-navigation';
import SignInScreen from '../screens/AuthStack/SignInScreen'
import SignUpScreen from '../screens/AuthStack/SignUpScreen';

const AuthNavigator = createSwitchNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});

export default AuthNavigator