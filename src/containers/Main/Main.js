import React from 'react';
import { connect } from 'react-redux';
import { addPoint, updatePoint, deletePoint, updatePointList } from 'actions/routeEditorActions';
import SearchBox from 'components/SearchBox';
import Map from 'components/Map';
import List from 'components/List';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="container__inner">
                <div className="container__col">
                    <SearchBox addPoint={this.props.addPoint}/>
                    <List pointsList={this.props.pointsList}
                          deletePoint={this.props.deletePoint} 
                          updatePointList={this.props.updatePointList} 
                    />
                </div>
                <div className="container__col">
                    <Map pointsList={this.props.pointsList}
                         updatePoint={this.props.updatePoint} />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        deleted: state.routeEditor.deleted,
        pointsList: state.routeEditor.points
    }),
    dispatch => ({
        addPoint: point => dispatch(addPoint(point)),
        updatePoint: (key, lat, lng, formatted_address) => dispatch(updatePoint(key, lat, lng, formatted_address)),
        deletePoint: index => dispatch(deletePoint(index)),
        updatePointList: (from, to) => dispatch(updatePointList(from, to)),
    })
)(Main);