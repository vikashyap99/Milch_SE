import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { dbcustomerRef } from '../../firebase/firebase.app'
import { ScrollView, StyleSheet, Text, ActivityIndicator, View, Image,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { MonoText } from '../../components/common/StyledText';
import { fetchEvents, timeToString } from '../../actions/events';
import Addmember from './Addmember';
import CustomerProfile from './CustomerProfile'



class EventScreen extends React.Component {


  state = { 
    customerslist: [],
    name: "",
    phone: "",
    location: ""

  }

  static navigationOptions = {
    title: 'Add member',
  };

  componentWillMount(){

    dbcustomerRef.on('value',  (snapshot) => {  

       const a = Object.keys(snapshot.val()).map((val) => { 

        return snapshot.val()[val]
      })
      const cus = []
      for(i = 0; i<a.length; i++)
      cus.push(a[i]["name"])
      this.setState({customerslist: cus})
    })}

  // componentDidMount = () => {
  //   this.props.fetchEvents()
  //   }

  customerProfileHandler = (name,key) => {
      <CustomerProfile 
      customername = {name}
      key = {key}
      />
      
      this.props.navigation.navigate("CustomerProfile")
  }
 
  render() {

      return (

        
        <ScrollView style={styles.scrollViewStyle}>
        

        <CommonButton title="Add Customer" onPress={() =>  this.props.navigation.navigate("Addmember")} />  

          {this.state.customerslist.map((name,key) => {
         return <TouchableOpacity  onPress = {() => this.customerProfileHandler(name,key)}>
                  
                <MonoText key = {key} style ={styles.TextStyle}>{name}</MonoText>
              </TouchableOpacity>
        
                
                
          })}
                  
          </ScrollView>
      )
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
  },
  TextStyle:{
    fontSize : 25,
     textAlign: 'center'
  }
});

// const mapStateToProps = ({ events }) => {
//   const eventsArray = Object.keys(events).map((eventId) => events[eventId])
//   return {
//     event: eventsArray[0],
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   fetchEvents: () => dispatch(fetchEvents()),
// })

export default createStackNavigator({
    Home: EventScreen,
    Addmember: Addmember,
    CustomerProfile: CustomerProfile
})

 

//export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);
