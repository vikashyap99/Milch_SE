import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { MonoText } from '../common/StyledText';

class Post extends React.Component {
    render() {
        const { post, key } = this.props
        const { title, images, content, timestamp, tags } = post
        return (
            <View style={styles.postContainer} key={key}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('PostDetail', { post })
                }} >
                    <MonoText style={styles.postTitle} >
                        {title}
                    </MonoText>
                </TouchableOpacity>
                <Image
                    style={styles.postImage}
                    source={{ uri: images[0] }}
                />
                <Text style={styles.timestamp} >{timestamp}</Text>
                {/* <Text style={styles.text} >{content}</Text> */}
                {/* <Text style={styles.text} >{tags.map((tag) => tag)}</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        elevation: 5,
        flexDirection: "column",
        backgroundColor: 'white',
        margin: 10,
        padding: 10,

        borderColor: '#111',
        borderWidth: 1,
        borderRadius: 10,

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.32,
        // shadowRadius: 5.46,
    },
    postTitle: {
        fontSize: 20,
        marginVertical: 5,
        color: '#333'
    },
    text: {
        marginVertical: 5,
        fontSize: 15,
        color: '#555'
    },
    timestamp: {
        marginVertical: 5,
        fontSize: 15,
        color: '#111'
    },
    postImage: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        margin: 20,
        padding: 20,
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 10
    }
})

export default withNavigation(Post)
