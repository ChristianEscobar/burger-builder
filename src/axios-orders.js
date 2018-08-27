import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-a8fc8.firebaseio.com/'
});

export default instance;