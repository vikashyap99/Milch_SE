import { RECEIVE_USERS } from '../actions/types'

export default users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}
