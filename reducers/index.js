import { combineReducers } from 'redux';
import posts from './posts';
import contacts from './contacts';
import users from './users';
import events from './events';
import donations from './donations';

export default combineReducers({
  posts,
  contacts,
  users,
  events,
  donations
})