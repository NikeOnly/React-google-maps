import ActionTypes from '../actions/ActionTypes';

export default function (state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.LOAD_PLACES_LIST:
            return payload;
        default:
            return state;
    }
}
