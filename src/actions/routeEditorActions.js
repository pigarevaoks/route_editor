import * as allActions from './allActions';

export const addPoint = point => ({
    type: allActions.ADD_POINT,
    payload: point
});

export const updatePoint = (key, lat, lng) => ({
    type: allActions.UPDATE_POINT,
    payload: { key, lat, lng }
});

export const deleteRoute = () => ({
    type: allActions.DELETE_ROUTE,
});