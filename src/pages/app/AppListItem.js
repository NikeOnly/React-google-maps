import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppListItem extends Component {
    static propTypes = {
        item: PropTypes.shape({}).isRequired,
        onCenterMap: PropTypes.func.isRequired
    }

    onPlaceClick = (e) => {
        e.preventDefault();
        const { item } = this.props;

        this.props.onCenterMap(item.coordinates);
    }

    handleDragStart = (e) => {
        const { item } = this.props;

        e.dataTransfer.setData('place_item', JSON.stringify(item));
    }

    render() {
        const { item } = this.props;

        return (
            <li
                className="app-list-item"
                role="button"
                aria-hidden
                onClick={this.onPlaceClick}

                draggable="true"
                onDragStart={this.handleDragStart}
            >
                <div>{item.name}</div>
                <div>Coordinates: {item.coordinates.lat}, {item.coordinates.lng}</div>
            </li>
        );
    }
}

export default AppListItem;
