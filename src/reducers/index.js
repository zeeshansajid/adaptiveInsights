import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import TreeReducer from './jsontree_reducer';

const rootReducer = combineReducers({
  form,
  treereducer: TreeReducer
});

export default rootReducer;
