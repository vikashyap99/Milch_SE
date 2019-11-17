import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Addmember from './Addmember'
import Members from './EventScreen'

const MainNavigator = createStackNavigator(
    {
  Home: {screen: Addmember},
  Profile: {screen: Members}
    },
  {
    initialRouteName: 'Members',
  }
);

const AddMemberNavigation = createAppContainer(MainNavigator);

export default AddMemberNavigation;