/* global google */
import React from 'react';
import './SearchBox.css';
 
export default class SearchBox extends React.Component {

    componentDidMount() {
        this.searchBox = new google.maps.places.SearchBox(this.textInput); 
    }

    componentWillUnmount() {
        google.maps.event.clearInstanceListeners(this.searchBox);
    }

    _handleKeyPress = (e) => {
        if (e.key !== 'Enter') return false;
        let getPlaces = new Promise(resolve => resolve(this.searchBox.getPlaces()));
        getPlaces.then(places => {
            this.props.addPoint({
                formatted_address: places[0].formatted_address,
                location: {
                    lat: places[0].geometry.location.lat(),                        
                    lng: places[0].geometry.location.lng()                        
                },
            })
        })
    }

    render() {
        
        return <input type="text"
                      className="search_box" 
                      ref={(input) => { this.textInput = input }}  
                      onKeyPress={this._handleKeyPress} 
                />;
    }
}