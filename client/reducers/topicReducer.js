import { FETCH_TOPICS, NEW_TOPIC } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action ) {
  switch (action.type) {
    case FETCH_TOPICS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}