import { RECEIVE_EVENTS } from '../actions/types'

export default events = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}
