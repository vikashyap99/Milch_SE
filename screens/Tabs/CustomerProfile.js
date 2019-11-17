import React,{Component} from 'react'
import {Text,View,ScrollView } from 'react-native'
import { dbEventsRef } from '../../firebase/firebase.app'



export default class CustomerProfile extends Component {

    state = { 
        product: "",
        quantity: "",
        price: "",
        Totalprice: ""
    
      }

    

    addCustomerHandler = (product,quantity,price) => { 

        total = parseInt(quantity)*parseInt(price)

        this.setState({Totalprice: total})

        dailyProduct = {
          product: this.state.product,
          quantity: this.state.quantity,
          price: this.state.price,
          Totalprice: this.state.Totalprice
        }
        dbEventsRef.push(dailyProduct)
      }

    render(){
        const {product,quantity,price} = this.state;
        return(
            <ScrollView>
            <View>
                <Text>Customer Profile</Text>
                <Text>{this.props.customername}</Text>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          
           <Input 
          onChangeText={text => this.setState({ product: text, error: null })}
          value={product}
          placeholder={"Product"}
        />
        
           <Input 
          onChangeText={text => this.setState({ quantity: text, error: null })}
          keyboardType={"quantity"}
          value={quantity}
          placeholder={"Quantity"}
        />
       <Input
          onChangeText={text => this.setState({ price: text, error: null })}
          value={price}
          placeholder={"price"}
        />
        <CommonButton title="Add" onPress={() => this.addCustomerHandler(product,quantity,price)} />
        </View>
            
            </View>
            </ScrollView>
        )
    }

}