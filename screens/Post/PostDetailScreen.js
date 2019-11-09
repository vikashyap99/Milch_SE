import React from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import { MonoText } from '../../components/common/StyledText';

function PostDetailScreen(props) {
  const { navigation } = props;
  const post = navigation.getParam('post', null);

  PostDetailScreen.navigationOptions = {
    title: post.title,
  };

  return (
    <ScrollView style={styles.container}>
      <MonoText style={styles.title} >{post.title}</MonoText>
      <Image
        style={styles.image}
        source={{ uri: post.images[0] }}
      />
      <Text style={styles.timestamp} >{post.timestamp}</Text>
      <Text style={styles.content} >{post.content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: 20,
    borderColor: '#111',
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginVertical: 20
  },
  timestamp: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    marginVertical: 10,
    marginHorizontal: 20
  },
  content: {
    padding: 20
  }
});

export default PostDetailScreen;
