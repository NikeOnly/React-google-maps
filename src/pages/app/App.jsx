import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MapItem from '../../components/MapItem';
import { loadPlacesList } from '../../actions/index';
import AppListItem from './AppListItem';

export class App extends Component {
    static propTypes = {
        placesList: PropTypes.arrayOf(PropTypes.object),
        loadPlacesList: PropTypes.func.isRequired
    }

    static defaultProps = {
        placesList: []
    }

    state = {
        center: { lat: 48.591560, lng: 31.469890 },
        zoom: 7
    }

    componentWillMount() {
        this.props.loadPlacesList();
    }

    onCenterMap = (coordinates) => {
        this.setState({ center: coordinates, zoom: 8 });
    }

    handleDragEnd = (e) => {
        try {
            const data = JSON.parse(e.dataTransfer.getData('place_item'));

            if (data) {
                this.setState({ center: data.coordinates, zoom: 8 });
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { center, zoom } = this.state;
        const { placesList } = this.props;

        return (
            <div className="app-container">
                <ul>
                    {placesList && placesList.length ? placesList.map(item => (
                        <AppListItem
                            key={item.id}
                            item={item}
                            onCenterMap={this.onCenterMap}
                        />
                    )) : null}
                </ul>

                <MapItem
                    center={center}
                    zoom={zoom}
                    placesList={placesList}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div className="map-loading-element" />}
                    containerElement={<div
                        className="map-container"
                        onDragOver={e => e.preventDefault()}
                        onDrop={this.handleDragEnd}
                    />}
                    mapElement={<div className="map-element" />}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    placesList: state.placesList
});

const mapDispatchToProps = {
    loadPlacesList
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
