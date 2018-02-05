import initialState from './initialState';
import { ADD_POINT, DELETE_ROUTE } from '../actions/allActions';
import { insertItem } from '../utils'

export default function routeEditor(state = initialState, action) {
  switch (action.type) {
    case ADD_POINT:
      console.log('ADD_POINT Action')
      return { ...state, points: insertItem(state.points, action) }

    case DELETE_ROUTE:
      console.log('DELETE_ROUTE Action')
      return { ...state, deleted: true };

    default:
      return state;
  }
}

