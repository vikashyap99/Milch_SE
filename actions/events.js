import { dbEventsRef } from '../firebase/firebase.app'

import { RECEIVE_EVENTS } from './types'

const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    payload: events
  }
}

export const fetchEvents = () => {
  return (dispatch) => {
    dbEventsRef.on("value", (snapshot) => {
      const data = snapshot.val()
      dispatch(receiveEvents(data))
    })
  }
}

export function timeToString(time = Date.now()) {
  const date = new Date(time)
  return date.toString().slice(0, 15)
}
