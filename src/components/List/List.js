import React from 'react';
import './List.css';
import Button from '../Button/Button';


export default class List extends React.Component {

    _renderData = (item, index) => {
        return (
            <div key={index} className="list_item">
                <div className="list_item__address">
                    {item.icon ? <img src={item.icon} alt="" className="list_item__icon"/> : null}
                    <span className="list_item__index">{index + 1}</span>
                    <span>{item.formatted_address}</span>
                </div>
                <div className="list_item__block">lat: {item.location.lat}</div>
                <div className="list_item__block">lng: {item.location.lng}</div>
                <Button title='DELETE'
                    onClick={() => this.props.deletePoint(index)}
                />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.pointsList.length > 0 ?
                    this.props.pointsList.map((item, index) => {
                        return (
                            this._renderData(item, index)
                        );
                    }) : 
                    <span>Insert your point...</span>
                }                   
            </div>
        );
    }
}