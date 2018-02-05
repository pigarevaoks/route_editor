import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routeEditorActions from '../../actions/routeEditorActions';
import React from 'react';
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
                    <List deleted={this.props.deleted}
                            pointsList={this.props.pointsList}
                            onClick={() => this.props.deleteRoute()} 
                    />
                </div>
                <div className="container__col">
                    <Map />
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
        deleteRoute: bindActionCreators(routeEditorActions.deleteRoute, dispatch),
        addPoint: bindActionCreators(routeEditorActions.addPoint, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);