import initialState from './initialState';
import { DELETE_ROUTE } from '../actions/allActions';

export default function routeEditor(state = initialState, action) {
  switch (action.type) {
    case DELETE_ROUTE:
      console.log('DELETE_ROUTE Action')
      return { ...state, deleted: true };

    default:
      return state;
  }
}
