import {
  FETCH_JSONTREE_DATA,
  FETCH_JSONTREE_DATA_SUCCESS,
  FETCH_JSONTREE_DATA_FAILURE
} from '../actions/types';

export default function(state = {}, action) {

  switch(action.type) {
    case FETCH_JSONTREE_DATA:
      return { ...state, loader: true };
   
    case FETCH_JSONTREE_DATA_SUCCESS:
      console.log("IN FETCH_JSONTREE_DATA_SUCCESS RECIEVED DATA ", action.payload);

      let jsonDataStr = JSON.stringify(action.payload);
      console.log("IN FETCH_JSONTREE_DATA_SUCCESS DATA AS STRING ", jsonDataStr);

      let jsonObj = JSON.parse(jsonDataStr);
      console.log("IN FETCH_JSONTREE_DATA_SUCCESS DATA AS JSON", jsonObj);

      return { ...state, data: jsonObj, loader: false };
   
    case FETCH_JSONTREE_DATA_FAILURE:
      return { ...state, data: [], error: action.payload, loader: false };

  }
  return state;
}
