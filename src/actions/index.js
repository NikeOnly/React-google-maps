import ActionTypes from './ActionTypes';
import axios from 'axios';

export const loadPlacesList = () => {
    const request = axios.get('/rest/places-list');

    return {
        type: ActionTypes.LOAD_PLACES_LIST,
        payload: request
    };
}
