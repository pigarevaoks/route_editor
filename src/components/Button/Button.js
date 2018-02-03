import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        return (
            <button type="button" className="button" onClick={this.props.onClick}>
                <span className="button__title">{this.props.title}</span>
            </button>
        );
    }
}