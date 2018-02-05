import React, { Component } from 'react';
import './List.css';
import Button from '../Button/Button';


export default class List extends Component {

    _renderData = (item, index) => {
        return (
            <div key={index} className="list_item">
                <div className="list_item__address">
                    {item.icon ? <img src={item.icon} className="list_item__icon"/> : null}
                    <span>{item.formatted_address}</span>
                </div>
                <div className="list_item__block">lat: {item.geometry.location.lat()}</div>
                <div className="list_item__block">lng: {item.geometry.location.lng()}</div>
                <Button title='DELETE'
                    onClick={this.props.onClick}
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