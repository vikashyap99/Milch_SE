import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MonoText as Text } from '../../common/StyledText';

const DonationsListItem = ({ donation: { name, number, amount, email } }) => (
    <View style={styles.container} >
        <View style={styles.details} >
            <Text style={styles.name} >{name}</Text>
            {getNumber(number, email)}
        </View>
        <View style={styles.amount} >
            <Text style={{ fontSize: 18 }} >₹{amount}</Text>
        </View>
    </View>
)

const getNumber = (number, email) => {
    if (number != "") return <Text style={styles.number} >{number}</Text>
    if (email != "") return <Text style={styles.number} >{email}</Text>
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        borderColor: '#111',
        borderWidth: 1,
        borderRadius: 10,
    },
    details: {
        flex: 5
    },
    amount: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        alignSelf: 'flex-start',
        marginVertical: 5,
        fontSize: 18,
        color: '#333'
    },
    number: {
        alignSelf: 'flex-start',
        marginVertical: 5,
        fontSize: 15,
        color: '#555'
    }
})

export default DonationsListItem;