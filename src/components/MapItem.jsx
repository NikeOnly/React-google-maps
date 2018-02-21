import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class MapItem extends Component {
    static PpropTypes = {
        center: PropTypes.shape({}).isRequired,
        zoom: PropTypes.number.isRequired,
        placesList: PropTypes.arrayOf(PropTypes.object)
    }

    static defaultProps = {
        placesList: []
    }

    render() {
        const { center, zoom, placesList } = this.props;

        return (
            <GoogleMap
                center={center}
                zoom={zoom}
            >
                {placesList && placesList.length ? placesList.map(item => (
                    <Marker
                        key={item.id}
                        position={item.coordinates}
                    />
                )) : null}
            </GoogleMap>
        );
    }
}

export default withScriptjs(withGoogleMap(MapItem));
