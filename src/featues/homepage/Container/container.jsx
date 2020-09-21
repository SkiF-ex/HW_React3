import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapState, mapDispatch } from '../../../core/maps';
import ClassComponent from '../../movie/FullMovieDescription/movieDescription';
import LeftBlockHTML from '../LeftBlock/leftBlock';

class HomepageContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <LeftBlockHTML />
                </div>
            </div>   
        );
    };
};

export default connect(mapState, mapDispatch)(HomepageContainer);