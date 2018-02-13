import React from 'react';

export default class Polyline extends React.Component {

    componentWillUpdate() {
        this.line.setMap(null);
    }

    componentWillUnmount() {
        this.line.setMap(null);
    }

    getPaths = () => {
        return this.props.pointsList.map((point) => point.location);
    }

    renderPolyline() {
        return {
            geodesic: true,
            strokeColor: '#E43A19',
            strokeOpacity: 1,
            strokeWeight: 4
        }
    }

    render() {
        const Polyline = this.props.maps.Polyline;

        const renderedPolyline = this.renderPolyline();
        const paths = { path: this.getPaths() };

        this.line = new Polyline(Object.assign({}, renderedPolyline, paths));

        this.line.setMap(this.props.map);

        return null;
    }
}