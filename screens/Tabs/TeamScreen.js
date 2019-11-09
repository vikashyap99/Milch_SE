import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { fetchContacts } from '../../actions/contacts';
import { fetchDonations } from '../../actions/donations';
import TeamListItem from '../../components/team/TeamListItem';
import { MonoText } from '../../components/common/StyledText';
import Button from '../../components/common/CommonButton';

class TeamScreen extends React.Component {

  static navigationOptions = {
    title: 'Team',
  };

  state = {
    contacts: null,
    donations: null
  }

  componentDidMount() {
    this.props.fetchContacts();
    this.props.fetchDonations();
  }

  getInviteButton = () => {
    const { nonCommunity } = this.props
    return (
      <Button
        style={styles.invitePeopleButton}
        title="Invite people to your team !!"
        onPress={() => {
          this.props.navigation.navigate('Invite', { nonCommunity })
        }}
      />
    )
  }

  render() {
    const { team } = this.props
    if (Object.keys(team).length <= 0) {
      return (
        <View style={styles.noTeamContainer} >
          <Ionicons
            style={{ color: '#333', alignSelf: 'center' }}
            size={90}
            name={Platform.OS === 'ios' ? 'ios-sad' : 'md-sad'}
          />
          <MonoText style={styles.noTeamText} >
            You do not have anyone in your team :(
          </MonoText>
          {this.getInviteButton()}
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={Object.keys(team).map((teamId) => teamId)}
          renderItem={({ item }) =>
            <TeamListItem item={team[item]} />
          }
          keyExtractor={item => item}
        />
        {this.getInviteButton()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noTeamContainer: {
    padding: 30
  },
  noTeamText: {
    marginVertical: 10,
    marginBottom: 40
  },
  invitePeopleButton: {
    marginHorizontal: 20
  }
});

const mapStateToProps = state => {
  const { contacts, donations } = state

  let community = {}
  let nonCommunity = {}

  Object.keys(contacts).map((contactId) => {
    let check = null
    Object.keys(donations).map((donationId) => {
      if (donations[donationId]["number"] == contacts[contactId]["number"]) {
        check = donationId
      }
    })
    if (check) {
      community[contactId] = contacts[contactId]
      community[contactId]["amount"] = donations[check]["amount"]
    } else {
      nonCommunity[contactId] = contacts[contactId]
    }
  })

  return {
    team: community,
    nonCommunity
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
  fetchDonations: () => dispatch(fetchDonations()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamScreen);
