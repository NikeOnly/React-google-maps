import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import AppListItem from '../../../src/pages/app/AppListItem';

describe('AppListItem', () => {
    test('match snapshot', () => {
        const container = shallow(
            <AppListItem
                item={{
                    id: 1,
                    name: 'Kyiv',
                    coordinates: { lat: 50.446853, lng: 30.520505 }
                }}
                onCenterMap={jest.fn()}
            />
        );

        expect(toJson(container)).toMatchSnapshot();
    })
})
