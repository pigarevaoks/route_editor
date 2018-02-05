import * as allActions from './allActions';

export const addPoint = point => ({
    type: allActions.ADD_POINT,
    payload: point
});

export const deleteRoute = () => ({
    type: allActions.DELETE_ROUTE,
});