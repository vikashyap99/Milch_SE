import { RECEIVE_DONATIONS } from '../actions/types'

export default donations = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DONATIONS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}
