import axios from 'axios';

const baseURL = 'https://todo-project-omega-murex.vercel.app';

const request = axios.create({
  baseURL,
});

export default request;
