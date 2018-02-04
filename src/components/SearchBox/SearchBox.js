/* global google */
import React from 'react';
import './SearchBox.css';
 
export default class SearchBox extends React.Component {

    componentDidMount() {
        this.searchBox = new google.maps.places.SearchBox(this.textInput); 
        this.searchBox.addListener('places_changed', this.onPlacesChanged);
    }

    componentWillUnmount() {
        google.maps.event.clearInstanceListeners(this.searchBox);
    }

    onPlacesChanged = () => {
        if (this.props.onPlacesChanged) {
            this.props.onPlacesChanged(this.searchBox.getPlaces());
        }
    }

    render() {
        
        return <input type="text"
                      className="search_box" 
                      ref={(input) => { this.textInput = input; }}  
                      {...this.props} 
                />;
    }
}