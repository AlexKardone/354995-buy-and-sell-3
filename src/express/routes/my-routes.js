'use strict';

const {Router} = require(`express`);
const myRouter = new Router();

myRouter.get(`/category/:id`, (req, res) => res.send(`/my/category/:id`));
myRouter.get(`/add`, (req, res) => res.send(`/my/add`));
myRouter.get(`/edit/:id`, (req, res) => res.send(`/my/edit/:id`));
myRouter.get(`/:id`, (req, res) => res.send(`/my/:id`));

module.exports = myRouter;
