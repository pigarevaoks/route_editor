import React from 'react';
import './Marker.css';

export default class Marker extends React.Component {
    render() {
        return (
            <div className="marker">
                <span>{this.props.text}</span>
            </div>
        );
    }
}