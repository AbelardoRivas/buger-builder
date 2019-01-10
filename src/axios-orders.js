import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-cee5b.firebaseio.com/' //modificar con Firebase URL
});

export default instance;
