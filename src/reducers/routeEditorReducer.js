import initialState from './initialState';
import { ADD_POINT, UPDATE_POINT, DELETE_POINT, UPDATE_POINT_LIST } from 'actions/allActions';
import { insertItem, updateItemInArray, removeItem, updatePositionInAray } from 'utils'

export default function routeEditor(state = initialState, action) {
  switch (action.type) {
    case ADD_POINT:
      console.log('ADD_POINT Action')
      return { ...state, points: insertItem(state.points, action) }

    case UPDATE_POINT:
      console.log('UPDATE_POINT Action')
      return { ...state, points: updateItemInArray(state.points, action) }

    case DELETE_POINT:
      console.log('DELETE_POINT Action')
      return { ...state, points: removeItem(state.points, action) };

    case UPDATE_POINT_LIST:
      console.log('UPDATE_POINT_LIST Action')
      return { ...state, points: updatePositionInAray(state.points, action) };

    default:
      return state;
  }
}

