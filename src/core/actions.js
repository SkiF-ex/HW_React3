export const getFilms = (payload) => ({
    type: 'GET_MOVIES',
    payload,
});

export const getActors = (payload) => ({
    type: 'GET_ACTORS',
    payload,
});

export const sortByLike = () => ({
    type: 'SORT_BY_LIKES',
});

export const sortByStars = () => ({
    type: 'SORT_BY_STARS',
});

export const searchByName = (payload) => ({
    type: 'SEARCH_BY_NAME',
    payload,
});

export const searchReset = () => ({
    type: 'SEARCH_RESET',
});

export const selectMovie = (payload) => ({
    type: 'SELECT_MOVIE',
    payload,
});

export const registr = () => ({
    type: 'REGISTRATION',
});

export const login = () => ({
    type: 'LOGIN',
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const back = () => ({
    type: 'BACK',
});

export const selectActor = (payload) => ({
    type: 'SELECT_ACTOR',
    payload,
});

export const deleteCurrentMovie = () => ({
    type: 'DELETE_MOVIE',
});

export const edit = () => ({
    type: 'EDIT',
})