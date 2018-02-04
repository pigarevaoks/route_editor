import React, { Component } from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from '../../config'

export default class Map extends Component {

    render() {
        return (
            <GoogleMap
                apiKey={GOOGLE_MAP_API_KEY} // set if you need stats etc ...
                center={[59.938043, 30.337157]}
                zoom={9}>
            </GoogleMap>
        );
    }
}
