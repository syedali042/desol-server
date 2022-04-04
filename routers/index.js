const Router = require('express').Router();
const taskRoutes = require('./taskRoutes');
Router.use('/task', taskRoutes);

module.exports = Router;