import React from 'react';
import './Button.css';

export default class Button extends React.Component {
    render() {
        return (
            <button type="button" className="button" onClick={this.props.onClick}>
                <span className="button__title">{this.props.title}</span>
            </button>
        );
    }
}