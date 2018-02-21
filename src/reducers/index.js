import { combineReducers } from 'redux';
import placesList from './placesList';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  placesList
});

export default rootReducer;
