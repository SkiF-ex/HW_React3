const getAllActors = async () => {
    return await fetch('http://localhost:3000/actors')
        .then(data => data.json())
};

export default getAllActors;