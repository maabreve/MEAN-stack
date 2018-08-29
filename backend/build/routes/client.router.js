"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_repository_1 = require("../repositories/client.repository");
var client_model_1 = require("../models/client.model");
var express = require("express");
var client_controller_1 = require("../controllers/client.controller");
var client_service_1 = require("../services/client.service");
var ClientRouter = /** @class */ (function () {
    function ClientRouter(router) {
        this._router = router;
        this._app = express();
    }
    ClientRouter.prototype.createRoutes = function () {
        var clientRepository = new client_repository_1.ClientRepository(client_model_1.ClientModel);
        var clientService = new client_service_1.ClientService(clientRepository);
        var clientController = new client_controller_1.ClientController(clientService);
        this._router.get('/api/clients', clientController.getAll.bind(clientController));
        this._router.get('/api/clients/:id', clientController.getById.bind(clientController));
        this._router.post('/api/clients', clientController.create.bind(clientController));
        this._router.put('/api/clients', clientController.update.bind(clientController));
        this._router.delete('/api/clients/:id', clientController.delete.bind(clientController));
    };
    return ClientRouter;
}());
exports.ClientRouter = ClientRouter;
