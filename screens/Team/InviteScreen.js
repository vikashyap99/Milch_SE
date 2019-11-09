import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  View,
  FlatList
} from 'react-native';
import TeamListItem from '../../components/team/TeamListItem';
import { withNavigation } from 'react-navigation';

class InviteScreen extends React.Component {

  static navigationOptions = {
    title: 'Invite People',
  };

  render() {

    const contacts = this.props.navigation.getParam('nonCommunity', {})

    return (
      <ScrollView style={styles.container}>
        <View>
          {Object.keys(contacts).length > 0
            ? <FlatList
              data={Object.keys(contacts).map((contactId) => contactId)}
              renderItem={({ item }) =>
                <TeamListItem item={contacts[item]} key={item} />
              }
              keyExtractor={item => item}
            />
            :
            <ActivityIndicator />
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default withNavigation(InviteScreen);
