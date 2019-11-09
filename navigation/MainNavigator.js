import { createStackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/Profile/ProfileScreen'
import TabNavigator from './TabNavigator'

const MainNavigator = createStackNavigator({
  Tabs: TabNavigator,
  Profile: ProfileScreen,
},
);

export default MainNavigator
