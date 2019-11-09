import React from 'react';
import { ScrollView, StyleSheet, Text, ActivityIndicator, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { MonoText } from '../../components/common/StyledText';
import { fetchEvents, timeToString } from '../../actions/events';

class EventScreen extends React.Component {
  static navigationOptions = {
    title: 'Upcoming Event',
  };

  componentDidMount = () => {
    this.props.fetchEvents()
  }

  render() {
    const { event } = this.props
    if (!event) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <ActivityIndicator />
        </View>
      )
    }

    const { title, timestamp, address, images } = event
    return (
      <ScrollView
        style={styles.container}
      >
        <MonoText style={styles.title} >{title}</MonoText>
        <Image
          style={styles.eventImage}
          source={{ uri: images[0] }}
        />
        <MonoText style={styles.timestamp} >{timeToString(timestamp)}</MonoText>
        <Text style={styles.address} >{address}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  title: {
    fontSize: 30
  },
  timestamp: {
    fontSize: 20,
    marginVertical: 15
  },
  eventImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    margin: 20,
    padding: 20,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 10
  }
});

const mapStateToProps = ({ events }) => {
  const eventsArray = Object.keys(events).map((eventId) => events[eventId])
  return {
    event: eventsArray[0],
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);
