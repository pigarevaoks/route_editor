import React from 'react';
import { connect } from 'react-redux';
import { addPoint, updatePoint, deletePoint, updatePointList } from 'actions/routeEditorActions';
import { SearchBox, Map, List } from 'components';
import './Main.css';

class Main extends React.Component {
    render() {
        const { pointsList, addPoint, deletePoint, updatePoint, updatePointList } = this.props;
        
        return (
            <div className="container__inner">
                <div className="container__col">
                    <SearchBox addPoint={addPoint}/>
                    <List pointsList={pointsList}
                          deletePoint={deletePoint} 
                          updatePointList={updatePointList} 
                    />
                </div>
                <div className="container__col">
                    <Map pointsList={pointsList}
                         updatePoint={updatePoint} />
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