import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';

class Login extends Component {
    render() {
        return (
            <>
                <div className="loginReister">
                    <h3 className="loginReister_title">Please Login</h3>
                    <input type="text" placeholder="Enter your name" id="loginName" className="loginReister_input"/>
                    <input type="password" placeholder="Enter your password" id="loginPassword" className="loginReister_input"/>
                    <button onClick={this.props.login} className="loginReister_button">Login</button>
                    <h3 className="loginReister_footer">Don't have an account? <NavLink to="/registration">Go to Register page</NavLink></h3>
                </div>
            </>
        );
    };
};

export default connect(mapState, mapDispatch)(Login);