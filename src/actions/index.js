import ActionTypes from './ActionTypes';

export const loadPlacesList = () => {
    const request = new Promise((resolve, reject) => {
        resolve([
            {
                id: 1,
                name: 'Kyiv',
                coordinates: { lat: 50.446853, lng: 30.520505 }
            },
            {
                id: 2,
                name: 'Kharkiv',
                coordinates: { lat: 49.995915, lng: 36.246787 }
            },
            {
                id: 3,
                name: 'Dnipro',
                coordinates: { lat: 48.482243, lng: 35.029190 }
            },
            {
                id: 4,
                name: 'Lviv',
                coordinates: { lat: 49.862397, lng: 24.031292 }
            }
        ]);
    });

    return {
        type: ActionTypes.LOAD_PLACES_LIST,
        payload: request
    };
}
