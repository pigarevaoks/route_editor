import React from 'react';
import Dragula from 'react-dragula';
import Button from '../Button/Button';
import './List.css';

export default class List extends React.Component {

    _renderData = (item, index) => {
        return (
            <div key={index} className="list_item">
                <div key={index} className="list_item__inner">
                    <div className="list_item__row">
                        <span className="list_item__index">{index + 1}</span>
                        <span>{item.formatted_address}</span>
                    </div>
                    <div className="list_item__row">
                        <span className="list_item__coord">lat: {item.location.lat}&nbsp;lng: {item.location.lng}</span>
                    </div>
                </div>
                <Button title='DELETE' onClick={() => this.props.deletePoint(index)} />
            </div>
        )
    }

    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {};
            Dragula([componentBackingInstance], options);
        }
    };

    render() {
        return (
            <div ref={this.dragulaDecorator}>{this.props.pointsList.map(this._renderData)}</div>
        );
    }
}
