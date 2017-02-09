import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  FETCH_JSONTREE_DATA,
  FETCH_JSONTREE_DATA_SUCCESS,
  FETCH_JSONTREE_DATA_FAILURE
} from './types';

const SERVER_URL = '/src/data';

export function fetchTreeData(){
 return function(dispatch) {
   
    axios.get(`${SERVER_URL}/treedata.txt`)
      .then(response => {
        dispatch({
          type: FETCH_JSONTREE_DATA_SUCCESS,
          payload: response.data
        });
      }
      ).catch( () => dispatch({
          type: FETCH_JSONTREE_DATA_FAILURE,
          payload: 'Failed to fetch workspaces data'
        })
      );
  } 
}

export function SortWorkspacesTable(sortOrder){
  return function(dispatch) {
     dispatch({
          type: SORT_WORKSPACES_DATA,
          payload: sortOrder
        });
  }
}
