import ActionTypes from '../actions/ActionTypes';

export default function (state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.LOAD_PLACES_LIST:
            if (payload.status != 200 || payload.data.errorMessage) {
                return [];
            } else {
                return payload.data;
            }
        default:
            return state;
    }
}
