import initialState from './initialState';
import { ADD_POINT, UPDATE_POINT, DELETE_POINT, UPDATE_POINT_LIST } from 'actions/allActions';
import { insertItem, updateItemInArray, removeItem, updatePositionInAray } from 'utils'

export default function routeEditor(state = initialState, action) {
  switch (action.type) {
    case ADD_POINT:
      return { ...state, points: insertItem(state.points, action) }

    case UPDATE_POINT:
      return { ...state, points: updateItemInArray(state.points, action) }

    case DELETE_POINT:
      return { ...state, points: removeItem(state.points, action) };

    case UPDATE_POINT_LIST:
      return { ...state, points: updatePositionInAray(state.points, action) };

    default:
      return state;
  }
}

