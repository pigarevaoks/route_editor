import React, { Component } from 'react';
import './List.css';
import Button from '../Button/Button';


export default class List extends Component {
    render() {
        console.log('deleted List', this.props.deleted)
        return (
            <div>
                <span>LIST</span>
                    <Button title='DELETE' 
                            onClick={this.props.onClick}
                    />
                    {this.props.deleted ? <span>DELETED!!!!</span> : null}
            </div>
        );
    }
}