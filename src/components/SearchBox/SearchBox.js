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
        if (e.key === 'Enter') {
            let getPlaces = new Promise(resolve => resolve(this.searchBox.getPlaces()))
            getPlaces.then(places => this.props.addPoint(places[0]))
        }
    }

    render() {
        
        return <input type="text"
                      className="search_box" 
                      ref={(input) => { this.textInput = input; }}  
                      onKeyPress={this._handleKeyPress} 
                />;
    }
}