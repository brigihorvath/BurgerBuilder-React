import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-3625f.firebaseio.com/'
});

export default instance;