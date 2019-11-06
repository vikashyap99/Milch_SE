import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import ListItem from "./src/components/Listitem/Listitem";

class App extends Component  {

  state = {
    placeName: "",
    places: []
  }

  placeHolderchangeHandler = (val) => {
    this.setState({
      placeName: val
    })
  }
  submitPlaceHandler = () => {
    if(this.state.placeName.trim() === ""){
      console.log("if statement")
      return;
     
    }

    this.setState(preState => {
      return {
        places: preState.places.concat(preState.placeName)
      };
    })
  }

  render(){

    const placesOut = this.state.places.map((place,i) => (
       <ListItem 
       key = {i}
       placeName = {place}
       />
    ));

  return (
    <View style={styles.container}>
      <Text>Milch App</Text>
      <View style ={styles.inputContainer}>
      
      <TextInput  
      style = {styles.placeInput}
      placeholder = "As your wish"
      value={this.state.placeName}
      onChangeText = {this.placeHolderchangeHandler}
       />
      
        <Button 
        title="Click"
        styles = {styles.placeButton}
        onPress = {this.submitPlaceHandler} /> 
      </View>
      <View 
      style = {{width: "100%" , marginBottom: 5}} >
        {placesOut}
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: "column"
  },
  inputContainer : {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default App;
