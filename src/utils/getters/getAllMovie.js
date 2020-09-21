const getAllMovies = async () => {
    return await fetch('http://localhost:3000/movies')
        .then(data => data.json())
};

export default getAllMovies;