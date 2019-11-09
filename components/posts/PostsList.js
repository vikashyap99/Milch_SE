import React from 'react'
import { View, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import Post from './Post';
import { MonoText } from '../common/StyledText';

function PostsList(props) {
    const { posts } = props

    if (Object.keys(posts).length <= 0) {
        return (
            <View style={styles.noPostContainer} >
                <Ionicons
                    style={{ color: '#333', alignSelf: 'center' }}
                    size={90}
                    name={Platform.OS === 'ios' ? 'ios-sad' : 'md-sad'}
                />
                <MonoText style={styles.noPostText} >
                    No posts available :(
                </MonoText>
            </View>
        )
    }

    return (
        <FlatList
            style={styles.postsListContainer}
            data={Object.keys(posts).map((postId) => postId)}
            renderItem={({ item }) =>
                <Post post={posts[item]} key={item} />
            }
            keyExtractor={item => item}
        />
    )
}

const styles = StyleSheet.create({
    postsListContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    emptypostListText: {
        fontSize: 20,
        color: 'grey',
        alignSelf: 'center',
        marginVertical: 50
    },
    noPostContainer: {
        padding: 30
    },
    noPostText: {
        marginVertical: 10,
        marginBottom: 40
    },
})

export default PostsList