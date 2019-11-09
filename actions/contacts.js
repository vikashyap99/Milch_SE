import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

import { RECEIVE_CONTACTS } from './types'

const receiveContacts = (contacts) => {
    return {
        type: RECEIVE_CONTACTS,
        payload: contacts
    }
}

export const fetchContacts = () => {
    return (dispatch) => {
        Permissions.askAsync(Permissions.CONTACTS)
            .then(({ status, permissions }) => {
                console.log("status", status)
                console.log("permissions", permissions)
                if (status === 'granted') {
                    Contacts.getContactsAsync({
                        fields: [Contacts.Fields.PhoneNumbers],
                    }).then(({ data }) => {
                        let numbers = {}
                        Object.keys(data).map((key) => {
                            let contact = data[key]
                            if (contact["phoneNumbers"]) {
                                let num = contact["phoneNumbers"][contact["phoneNumbers"].length - 1]["number"].toString()
                                if (num.length >= 10) {
                                    num = num.replace(/[^0-9]/g, '').slice(-10)
                                    numbers[num] = {
                                        name: data[key]["name"],
                                        number: num
                                    }
                                }
                            }
                        })
                        dispatch(receiveContacts(numbers))
                    })
                } else {
                    throw new Error('Contacts permission not granted');
                }
            })
    }
}
