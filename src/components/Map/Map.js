/* global google */
import React from 'react';
import GoogleMap from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from 'config';
import Marker from 'components/Marker';
import Polyline from 'components/Polyline';
import './Map.css';

export default class Map extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            center: [59.938043, 30.337157],
            zoom: 7,
            draggable: true
        };
    }

    _onMouseVertical = (childKey, childProps, mouse) => {
        this.setState({ draggable: false });
        this.props.updatePoint(parseInt(childKey), mouse.lat, mouse.lng, childProps.marker.formatted_address);
    }

    _onMouseUp = (childKey, childProps, mouse) => {
        this.setState({ draggable: true });
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': { lat: mouse.lat, lng: mouse.lng }}, (results, status) => {
            if (results !== null) {
                this.props.updatePoint(parseInt(childKey), mouse.lat, mouse.lng, results[0].formatted_address);
            }
        })
    }

    _onChange = ({ center, zoom }) => this.setState({ center: center, zoom: zoom });

    render() {

        const Markers = this.props.pointsList.map((marker, index) => (
            <Marker
                key={index}
                text={index + 1}
                marker={marker}
                lng={marker.location.lng}
                lat={marker.location.lat}
            />
        ));

        return (
            <div className="map" >
                <GoogleMap
                    draggable={this.state.draggable}
                    onChange={this._onChange}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    onChildMouseDown ={this._onMouseVertical}
                    onChildMouseUp = {this._onMouseUp }
                    onChildMouseMove = {this._onMouseVertical}
                    bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                    onGoogleApiLoaded={({ map, maps }) => { this.setState({ map: map, maps: maps, mapLoaded: true }) }}
                >
                    {Markers}
                </GoogleMap>
                {this.state.mapLoaded && <Polyline pointsList={this.props.pointsList} map={this.state.map} maps={this.state.maps} />}
            </div>
        );
    }
}
