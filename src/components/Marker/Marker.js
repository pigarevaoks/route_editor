import React from 'react';
import './Marker.css';

class Marker extends React.Component {

    state = { isShow: false };

    _calculateDelta = (curX, curY) => {
        return Math.abs(this.state.prevX - curX) + Math.abs(this.state.prevY - curY);
    }

    _onClick = event => {
        event.stopPropagation();
        this.setState(prevState => ({ isShow: !prevState.isShow }));  
    }

    render() {
        const { text, marker } = this.props;
        return (
            <div className="marker__container" onClick={this._onClick}>
                <div className="marker__item">{text}</div>
                {this.state.isShow &&
                <div className="marker__balloon">
                    {marker.formatted_address}
                </div>}
            </div>
        );
    }
}

export default Marker;