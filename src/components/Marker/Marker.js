import React from 'react';
import './Marker.css';

const Marker = ({ text }) => (
    <div className="marker">
        <span>{text}</span>
    </div>
);

export default Marker;