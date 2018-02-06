import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routeEditorActions from '../../actions/routeEditorActions';
import './Container.css';
import SearchBox from '../SearchBox/SearchBox';
import Map from '../Map/Map'
import List from '../List/List'

class Container extends React.Component {
    render() {
        return (
            <div className="container__inner">
                <div className="container__col">
                    <SearchBox addPoint={this.props.addPoint}/>
                    <List pointsList={this.props.pointsList}
                          deletePoint={this.props.deletePoint} 
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

function mapStateToProps(state) {
    return {
        deleted: state.routeEditor.deleted,
        pointsList: state.routeEditor.points
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addPoint: bindActionCreators(routeEditorActions.addPoint, dispatch),
        updatePoint: bindActionCreators(routeEditorActions.updatePoint, dispatch),
        deletePoint: bindActionCreators(routeEditorActions.deletePoint, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);