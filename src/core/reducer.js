import { SearchBy } from '../utils/seacrhByName/searchByName';

const searchBy = new SearchBy();

const _ = require('lodash');

const initialState = {
    isLogined: false,
    allFilms: [],
    allActors: [],
    currentActor: [],
    currentFilms: [],
    selectedMovie: [],
    byLikes: [],
    byStars: [],
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {...state, allFilms: action.payload, currentFilms: action.payload, byLikes: false, byStars: false};
        case 'GET_ACTORS':
            return {...state, allActors: action.payload};    

        case 'SORT_BY_LIKES':
            if (state.byLikes === false) {
                return {...state, byLikes: true, currentFilms:_.sortBy(state.currentFilms, 'likes').reverse()};
            } else {
                return {...state, byLikes: false, currentFilms: _.sortBy(state.currentFilms, 'likes')};
            };

        case 'SORT_BY_STARS':
            if (state.byStars === false) {
                return {...state, byStars: true, currentFilms: _.sortBy(state.currentFilms, 'stars').reverse()};
            } else {
                return {...state, byStars: false, currentFilms: _.sortBy(state.currentFilms, 'stars')};
            };

        case 'SEARCH_BY_NAME':
            const input = document.getElementById('searchInput')
            return {...state, currentFilms: searchBy.searchByName(input, state.allFilms)};

        case 'SEARCH_RESET':
            document.getElementById('searchInput').value = '';
            return {...state, currentFilms: state.allFilms};

        case 'SELECT_MOVIE':
            const title = action.payload.target.innerHTML;
            let movie;
            state.allFilms.forEach((el) => {if (el.title === title) {movie = el}});
            return {...state, selectedMovie: movie};

        case 'REGISTRATION':
            const regName = document.getElementById('regName').value;
            const regPassword = document.getElementById('regPassword').value;
            localStorage.setItem(regName, regPassword);
            console.log('You have ragistered!')

            return {...state};

        case 'LOGIN':
            const logingName = document.getElementById('loginName').value;
            const loginPassword = document.getElementById('loginPassword').value;

            if (localStorage.getItem(logingName) === loginPassword) {
                return {...state, isLogined: true};
            } else {
                console.log('error');
                return {...state};
            };

        case 'BACK':
            window.history.back();
            return {...state}; 
        
        case 'LOGOUT':
            return {...state, isLogined: false};
        
        case 'SELECT_ACTOR':
            const actorName = action.payload.target.innerHTML;
            let selectedActor = [];
            state.allActors.forEach((el) => {
                if (el.name + ' ' === actorName) {
                    selectedActor = el;
                };
            });
            return {...state, currentActor: selectedActor};

        case 'DELETE_MOVIE':
            state.allFilms.forEach((el, i) => {
                if (el === state.selectedMovie) {
                    state.allFilms.splice(i, 1)
                };
            });

            state.currentFilms.forEach((el, i) => {
                if (el === state.selectedMovie) {
                    state.currentFilms.splice(i, 1)
                };
            });
            return {...state}

        case 'EDIT':
            const changedTitle = document.getElementById('title').value;
            const changedImg = document.getElementById('imgUrl').value;
            const changedDirector = document.getElementById('director').value;
            const changedGenres = document.getElementById('genres').value;
            const changedDescription = document.getElementById('description').value;

            state.currentFilms.forEach((el, i) => {
                if (el === state.selectedMovie) {
                    state.selectedMovie.title = changedTitle;
                    state.selectedMovie.posterUrl = changedImg;
                    state.selectedMovie.director = changedDirector;
                    state.selectedMovie.genres = [changedGenres];
                    state.selectedMovie.description = changedDescription;

                    state.currentFilms.splice(i, 1, state.selectedMovie)
                };
            });
            return {...state};
    
        default:
            return {...state};
    };
};

export default reducer;