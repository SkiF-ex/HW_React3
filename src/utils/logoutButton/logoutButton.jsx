import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { mapState, mapDispatch } from '../../core/maps';

class Logout extends Component {
    render() {
        return(
            <button onClick={this.props.logout} className="logout-button">LogOut</button>
        )
    }
}

export default connect(mapState, mapDispatch)(Logout)