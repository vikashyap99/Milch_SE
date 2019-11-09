import { dbDonationsRef } from '../firebase/firebase.app'

import { RECEIVE_DONATIONS } from './types'

const receiveDonations = (donations) => {
  return {
    type: RECEIVE_DONATIONS,
    payload: donations
  }
}

export const fetchDonations = () => {
  return (dispatch) => {
    dbDonationsRef.on("value", (snapshot) => {
      const data = snapshot.val()
      dispatch(receiveDonations(data))
    })
  }
}
