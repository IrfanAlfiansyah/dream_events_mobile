import {combineReducers} from 'redux';

import user from './user';
import counter from './counter';
import order from './order';
import wishlist from './wishlist';
import booking from './booking';

export default combineReducers({
  user,
  counter,
  order,
  booking,
  wishlist,
});
