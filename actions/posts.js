import { dbPostsRef } from '../firebase/firebase.app'

import { RECEIVE_POSTS } from './types'

const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    payload: posts
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    dbPostsRef.on("value", (snapshot) => {
      const data = snapshot.val()
      dispatch(receivePosts(data))
    })
  }
}
