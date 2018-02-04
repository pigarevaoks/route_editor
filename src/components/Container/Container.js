import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routeEditorActions from '../../actions/routeEditorActions';
// import PropTypes from 'prop-types';
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
                    <SearchBox />
                    <List deleted={this.props.deleted} onClick={() => this.props.deleteRoute()} />
                </div>
                <div className="container__col">
                    <Map />
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