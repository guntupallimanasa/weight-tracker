
let api = 'http://localhost:7002';

export default (url, options = {}) => {

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        },
        ...options
    };

    const apiResponse = fetch(`${api}/${url}`, headers)
        .then(resp => resp);

    return apiResponse;
};