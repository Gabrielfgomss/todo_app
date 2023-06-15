import axios from 'axios';

const baseURL = 'https://todo-project-api.vercel.app';

const request = axios.create({
  baseURL,
});

export default request;
