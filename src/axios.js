import axios from 'axios';

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'http://localhost:5001/clone-25283/us-central1/api' // THE API (cloud function) URL
});

export default instance;