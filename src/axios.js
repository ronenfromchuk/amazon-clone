import axios from 'axios';

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: '***************************************' // THE API (cloud function) URL
});

export default instance;
