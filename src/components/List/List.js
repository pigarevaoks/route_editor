import React from 'react';
import Dragula from 'react-dragula';
import Button from 'components/Button/Button';
import './List.css';

export default class List extends React.Component {

    _renderItem = (item, index) => {
        return (
            <div key={index} className="list_item" data-index={index}>
                <div className="list_item__inner">
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
            const drake = Dragula([componentBackingInstance])
            
            drake.on('drop', (el, target, source, sibling) => {
                drake.cancel(true)
                let siblingIndex = sibling ? sibling.dataset.index : this.props.pointsList.length;
                this.props.updatePointList(el.dataset.index, siblingIndex)
            })
        }
    };

    render() {
        return (
            <div ref={this.dragulaDecorator}>{this.props.pointsList.map(this._renderItem)}</div>
        );
    }
}
