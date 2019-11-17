import React,{Component} from 'react';
import { dbcustomerRef } from '../../firebase/firebase.app'
import { ScrollView, StyleSheet, Text, ActivityIndicator, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { MonoText } from '../../components/common/StyledText';
import { fetchEvents, timeToString } from '../../actions/events';


export default class Addmember extends  Component {

    state = { 
        customerslist: [],
        name: "",
        phone: "",
        location: ""
    
      }

    addCustomerHandler = (name,phone,location) => { 
        customer = {
          name: this.state.name,
          phone: this.state.phone,
          location: this.state.location
        }
        dbcustomerRef.push(customer)
      }

    render(){

        const {name,phone,location} = this.state;

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          
           <Input 
          onChangeText={text => this.setState({ name: text, error: null })}
          value={name}
          placeholder={"Name"}
        />
        
           <Input 
          onChangeText={text => this.setState({ phone: text, error: null })}
          keyboardType={"phone"}
          value={phone}
          placeholder={"Phone"}
        />
       <Input
          onChangeText={text => this.setState({ location: text, error: null })}
          value={location}
          placeholder={"Location"}
        />
        <CommonButton title="Add Customer" onPress={() => this.addCustomerHandler(phone,name,location)} />
        </View>
      
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