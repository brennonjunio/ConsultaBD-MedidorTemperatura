const express = require("express");
const controller = require("../controllers/controller");
const routes = express.Router();

routes.get("/buscar", controller.busca);

module.exports = routes;
