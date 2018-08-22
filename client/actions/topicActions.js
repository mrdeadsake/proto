import { FETCH_TOPICS, NEW_TOPIC } from './types';

export const fetchTopics = () => dispatch => {
  fetch(`/topics.json`, {
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(res=>res.json())
    .then(topics=>dispatch({
      type: FETCH_TOPICS,
      payload: topics
    })
  );
}