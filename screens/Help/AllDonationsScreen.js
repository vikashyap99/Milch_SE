import React from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { MonoText as Text } from '../../components/common/StyledText';
import { fetchDonations } from '../../actions/donations';
import DonationsListItem from '../../components/help/donations/DonationsListItem';

class AllDonationsScreen extends React.Component {
  static navigationOptions = {
    title: 'All Donations',
  };

  componentDidMount() {
    this.props.fetchDonations()
  }

  render() {
    const { donations } = this.props

    return (
      <ScrollView style={styles.container} >
        <Text>Thank you all for your support !!</Text>
        {
          Object.keys(donations).length <= 0 ?
            <ActivityIndicator />
            :
            <FlatList
              data={Object.keys(donations).map((donationId) => donationId)}
              renderItem={({ item }) =>
                <DonationsListItem donation={donations[item]} />
              }
              keyExtractor={donationId => donationId}
            />
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
})

const mapStateToProps = state => {
  return {
    donations: state.donations,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDonations: () => dispatch(fetchDonations()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllDonationsScreen);
