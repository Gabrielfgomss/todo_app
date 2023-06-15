import axios from 'axios';

const baseURL =
  'http://localhost:3000' || 'https://todo-project-omega-murex.vercel.app';

const request = axios.create({
  baseURL: 'http://localhost:3000',
});

export default request;
