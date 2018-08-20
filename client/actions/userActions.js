import { FETCH_USER, NEW_USER } from './types';

export const fetchUser = (guid) => dispatch => {
  fetch(`/users/${guid}.json`, {
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(res=>res.json())
    .then(user=>dispatch({
      type: FETCH_USER,
      payload: user
    })
  );
}