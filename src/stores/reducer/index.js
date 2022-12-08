import {combineReducers} from 'redux';

import user from './user';
import counter from './counter';
import order from './order';
import wishlist from './wishlist';

export default combineReducers({
  user,
  counter,
  order,
  wishlist,
});
