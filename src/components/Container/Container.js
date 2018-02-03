import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routeEditorActions from '../../actions/routeEditorActions';
// import PropTypes from 'prop-types';
import React from 'react';
import './Container.css';
import Input from '../Input/Input';
import Map from '../Map/Map'
import List from '../List/List'

class Container extends React.Component {
    render() {
        return (
            <div className="container__inner">
                <div className="container__col">
                    <Input />
                    <List deleted={this.props.deleted} onClick={() => this.props.deleteRoute()} />
                </div>
                <div className="container__col">
                    <Map googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_rLJhfi9_xpVDYAG9awB7ZBJEeBZ64Mg&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        )
    }
}

// Container.propTypes = {
//     stuffActions: PropTypes.object,
//     stuff: PropTypes.array
// };

function mapStateToProps(state) {
    return {
        deleted: state.routeEditor.deleted
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteRoute: bindActionCreators(routeEditorActions.deleteRoute, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);