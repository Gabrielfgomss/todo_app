import express from 'express';
import user from './userRoute.js';
import task from './taskRoute.js';

const routes = (app) => {
  app.use(express.json(), user, task);
};

export default routes;
