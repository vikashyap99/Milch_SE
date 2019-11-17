import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Alert
} from 'react-native';
import { MonoText } from '../../components/common/StyledText';
import { connect } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { fetchDonations } from '../../actions/donations';
import { fetchContacts } from '../../actions/contacts';
import { auth , dbcustomerRef} from '../../firebase/firebase.app';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {


  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <TouchableOpacity onPress={() => {
          Alert.alert(
            'Sign Out',
            'Are you sure ?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              { text: 'Yes', onPress: () => auth.signOut() },
            ],
            { cancelable: true },
          );
        }}
        >
          <Ionicons
            style={{ marginRight: 20 }}
            size={26}
            name={Platform.OS === 'ios' ? 'ios-power' : 'md-power'} />
        </TouchableOpacity>
      )
    }
  };

 
  

  componentDidMount() {
    this.props.fetchDonations();
    this.props.fetchContacts();
    
  }

  render() {
    const { total, personalDonation, totalDonation } = this.props
    const { currentUser } = auth

    if (!currentUser.displayName) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <ScrollView style={styles.scrollViewStyle}>
        <MonoText style={styles.name} >{currentUser.displayName}</MonoText>
        <MonoText style={styles.email} >{currentUser.email}</MonoText>
        {/* <View style={styles.helpBox} >
          <MonoText style={styles.helpBoxheading} >Thank you for your support !!</MonoText>
          <MonoText style={styles.personalDonation} >You have donated ₹{personalDonation}</MonoText>
          <MonoText style={styles.personalDonation} >This helped total {parseInt(personalDonation / 22)} girls</MonoText>
          <MonoText style={styles.personalDonation} >Your community have donated ₹{totalDonation}</MonoText>
          <MonoText style={styles.personalDonation} >This helped total {parseInt(totalDonation / 22)} girls</MonoText>
    </View> */}
        {/* <MonoText style={styles.hurray} >Dairy Name</MonoText>
        <MonoText style={styles.hurray} >Location</MonoText>
        <View style={styles.helpBox} >
          <MonoText style={styles.personalDonation} >This month Credit ₹{total}</MonoText>
          <MonoText style={styles.personalDonation} >Total Credit {parseInt(total / 22)} </MonoText>
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: '#333',
    marginVertical: 10
  },
  email: {
    fontSize: 20,
    color: '#555'
  },
  helpBox: {
    margin: 10,
    marginVertical: 20,
    padding: 10,
    borderColor: '#111',
    borderWidth: 1,
    borderRadius: 10,
  },
  helpBoxheading: {
    fontSize: 15,
    marginVertical: 20,
    fontWeight: 'bold'
  },
  personalDonation: {
    alignSelf: 'flex-start',
    marginVertical: 10
  },
  hurray: {
    fontSize: 15,
    color: '#555'
  },
  TextStyle:{
    fontSize : 25,
     textAlign: 'center'
  }
});

const mapStateToProps = state => {

  const { contacts, donations } = state

  let personalDonation = 0
  let total = 0
  Object.keys(donations).map((donationId) => {
    total += parseInt(donations[donationId].amount)
    if (donations[donationId]["email"] == auth.currentUser.email) {
      personalDonation += parseInt(donations[donationId].amount)
    }
  })

  let totalDonation = 0
  Object.keys(donations).map((donationId) => {
    Object.keys(contacts).map((contactId) => {
      if (donations[donationId]["number"] == contacts[contactId]["number"]) {
        totalDonation += parseInt(donations[donationId].amount)
      }
    })
  })
  totalDonation += parseInt(personalDonation)

  return {
    total,
    personalDonation,
    totalDonation
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDonations: () => dispatch(fetchDonations()),
  fetchContacts: () => dispatch(fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
