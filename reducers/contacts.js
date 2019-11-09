import { RECEIVE_CONTACTS } from '../actions/types'

export default contacts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CONTACTS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}
