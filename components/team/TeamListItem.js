import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MonoText as Text } from '../common/StyledText';

const TeamListItem = ({ item: { number, name, amount } }) => (
    <View style={styles.container} >
        <View style={styles.details} >
            <Text style={styles.name} >{name}</Text>
            <Text style={styles.number} >{number}</Text>
        </View>
        {amount
            ? <View style={styles.amount} >
                <Text style={{ fontSize: 18 }} >₹{amount}</Text>
            </View>
            :
            <TouchableOpacity style={styles.invite} >
                <AntDesign style={{ margin: 10 }} size={30} name={'adduser'} />
            </TouchableOpacity>
        }
    </View>
)

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
    },
    amount: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    invite: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TeamListItem;