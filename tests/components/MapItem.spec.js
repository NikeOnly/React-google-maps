import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import MapItem from '../../src/components/MapItem';

describe('MapItem', () => {
    test('match snapshot', () => {
        const container = shallow(
            <MapItem
                loadingElement={<div />}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            />
        );

        expect(toJson(container)).toMatchSnapshot();
    })
})
