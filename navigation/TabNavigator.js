import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/common/TabBarIcon';
import HomeScreen from '../screens/Tabs/HomeScreen';
import PostsScreen from '../screens/Tabs/PostsScreen';
import TeamScreen from '../screens/Tabs/TeamScreen';
import HelpScreen from '../screens/Tabs/HelpScreen';
import EventScreen from '../screens/Tabs/EventScreen'
import PostDetailScreen from '../screens/Post/PostDetailScreen';
import InviteScreen from '../screens/Team/InviteScreen';
import AllDonationsScreen from '../screens/Help/AllDonationsScreen';
import DonateScreen from '../screens/Help/DonateScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : `md-information-circle${focused ? '' : '-outline'}`
      }
    />
  ),
};

const PostsStack = createStackNavigator(
  {
    Posts: PostsScreen,
    PostDetail: PostDetailScreen
  }
);

PostsStack.navigationOptions = {
  tabBarLabel: 'Posts',
  //Yearly
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'} />
  ),
};

const TeamStack = createStackNavigator(
  {
    Team: TeamScreen,
    Invite: InviteScreen,
  }
);

TeamStack.navigationOptions = {
  tabBarLabel: 'Product',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} />
  ),
};

const HelpStack = createStackNavigator(
  {
    Help: HelpScreen,
    AllDonations: AllDonationsScreen,
    Donate: DonateScreen
  }
);

HelpStack.navigationOptions = {
  tabBarLabel: 'Help',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-hand' : 'md-hand'} />
  ),
};

const EventStack = createStackNavigator(
  {
    Event: EventScreen,
  }
);

EventStack.navigationOptions = {
  tabBarLabel: 'Member',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-megaphone' : 'md-megaphone'} />
  ),
};

const tabNavigator = createBottomTabNavigator({
  HomeStack,
 // TeamStack,
  //PostsStack,
  EventStack,
  HelpStack,
},
  {
    tabBarPosition: 'bottom',
    navigationOptions: {
      header: null
    }
  });


export default tabNavigator;
