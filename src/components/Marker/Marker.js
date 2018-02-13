import React from 'react';
import './Marker.css';

class Marker extends React.Component {

    constructor(props) {
        super(props)

        this.state = { isShow: false };
    }

    _calculateDelta = (curX, curY) => {
        return Math.abs(this.state.prevX - curX) + Math.abs(this.state.prevY - curY);
    }

    _onClick = event => {
        event.stopPropagation();
        this.setState(prevState => ({ isShow: !prevState.isShow }));  
    }

    render() {
        return (
            <div className="marker__container" onClick={this._onClick}>
                <div className="marker__item">{this.props.text}</div>
                {this.state.isShow &&
                <div className="marker__balloon">
                    {this.props.marker.formatted_address}
                </div>}
            </div>
        );
    }
}

export default Marker;