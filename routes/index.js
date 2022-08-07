const express = require('express');

const routes = express.Router();
const usersController = require('../controller/users');

routes.post('/users',usersController.createUsers);

module.exports = routes;