import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const listItem = (props) => (
    <View style = {styles.listitem}>
        <Text>
            {props.placeName}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    listitem: {
        width: "100%",
        margin: 5,
        padding: 10,
        backgroundColor: "#eee"

    }
})

export default listItem;