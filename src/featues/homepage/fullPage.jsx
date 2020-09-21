import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomepageHeader from './Header/header.jsx';
import { mapState, mapDispatch } from '../../core/maps';
import getAllMovies from '../../utils/getters/getAllMovie';
import getAllActors from '../../utils/getters/getAllActors';

class FullPage extends Component {
    async componentDidMount() {
        this.props.getFilms(await getAllMovies());
        this.props.getActors(await getAllActors());
    };

    render() {
        const movies = this.props.allFilms;
        if (movies.length !== 0){
            return (
                <>
                    <HomepageHeader />
                </>
            );
        };
        return <div></div> 
    };
};

export default connect(mapState, mapDispatch)(FullPage);

