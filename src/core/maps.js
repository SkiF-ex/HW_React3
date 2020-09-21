import {
    getActors,
    getFilms,
    sortByLike,
    sortByStars,
    searchByName,
    searchReset,
    selectMovie,
    registr,
    login,
    logout,
    back,
    selectActor,
    deleteCurrentMovie,
    edit,
} from './actions';

const mapState = (state) => {
    return {
        allFilms: state.reducer.allFilms,
        currentFilms: state.reducer.currentFilms,
        allActors: state.reducer.allActors,
        selectedMovie: state.reducer.selectedMovie,
        isLogined: state.reducer.isLogined,
        currentActor: state.reducer.currentActor,
    };
};

const mapDispatch = {
    getFilms,
    sortByLike,
    sortByStars,
    searchByName,
    searchReset,
    selectMovie,
    getActors,
    registr,
    login,
    logout,
    back,
    selectActor,
    deleteCurrentMovie,
    edit,
};

export {mapState, mapDispatch};