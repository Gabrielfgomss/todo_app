import express from 'express';
import user from './userRoute.js';
import task from './taskRoute.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ nome: 'API do Portfolio' });
  });
  app.use(express.json(), user, task);
};

export default routes;
