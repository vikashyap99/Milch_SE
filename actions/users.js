import { dbUsersRef } from '../firebase/firebase.app'

import { RECEIVE_USERS } from './types'

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    payload: users
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dbUsersRef.on("value", (snapshot) => {
      const data = snapshot.val()
      dispatch(receiveUsers(data))
    })
  }
}
