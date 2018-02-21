import React from 'react'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import ConnectedApp, { App } from '../../../src/pages/app/App';

describe('App', () => {
    test('match snapshot', () => {
        const tree = renderer.create(<App loadPlacesList={jest.fn()} />).toJSON();

        expect(tree).toMatchSnapshot();
    })

    test('render connected component', () => {
        const initialState = { placesList: [] };
        const mockStore = configureStore();
        const store = mockStore(initialState);

        const container = shallow(<ConnectedApp store={store} /> );

        expect(toJson(container)).toMatchSnapshot();
        expect(container.prop('placesList')).toEqual(initialState.placesList);
    })
})
