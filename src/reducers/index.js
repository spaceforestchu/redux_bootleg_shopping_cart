import { combineReducers } from 'redux';
import itemReducer from './item.js';
import ShoppingCartReducer from './shoppingCart';

const rootReducer = combineReducers({
  items: itemReducer,
  shoppingCart: ShoppingCartReducer
});

export default rootReducer;
