'use strict';

const {Router} = require(`express`);
const mainRouter = new Router();

// mainRouter.get(`/category/:id`, (req, res) => res.send(`/main/category/:id`));
// mainRouter.get(`/add`, (req, res) => res.send(`/main/add`));
// mainRouter.get(`/edit/:id`, (req, res) => res.send(`/main/edit/:id`));
// mainRouter.get(`/:id`, (req, res) => res.send(`/main/:id`));

mainRouter.get(`/login`, (req, res) => res.render(`login`));

module.exports = mainRouter;
