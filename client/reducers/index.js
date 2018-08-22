import { combineReducers } from 'redux';
import userReducer from './userReducer';
import topicReducer from './topicReducer';

export default combineReducers({
    users: userReducer,
    topics: topicReducer,
});
