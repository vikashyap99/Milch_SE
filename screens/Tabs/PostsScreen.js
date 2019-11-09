import React from 'react';
import { ScrollView, StyleSheet, Text, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import PostsList from '../../components/posts/PostsList'
import { fetchPosts } from '../../actions/posts'

class PostsScreen extends React.Component {
  static navigationOptions = {
    title: 'Posts',
  };

  state = {
    refreshing: false,
  }

  componentDidMount = () => {
    this.setState({ refreshing: true })
    this.props.fetchPosts();
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.props.fetchPosts();
  }

  componentWillReceiveProps = (props) => {
    this.setState({ refreshing: false })
  }

  render() {
    const { posts } = this.props
    return (
      <ScrollView style={styles.container} >
        <PostsList posts={posts} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
