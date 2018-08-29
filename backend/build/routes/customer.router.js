"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_repository_1 = require("../repositories/customer.repository");
var customer_model_1 = require("../models/customer.model");
var express = require("express");
var customer_controller_1 = require("../controllers/customer.controller");
var customer_service_1 = require("../services/customer.service");
var CustomerRouter = /** @class */ (function () {
    function CustomerRouter(router) {
        this._router = router;
        this._app = express();
    }
    CustomerRouter.prototype.createRoutes = function () {
        var customerRepository = new customer_repository_1.CustomerRepository(customer_model_1.CustomerModel);
        var customerService = new customer_service_1.CustomerService(customerRepository);
        var customerController = new customer_controller_1.CustomerController(customerService);
        this._router.get('/api/customers', customerController.getAll.bind(customerController));
        this._router.get('/api/customers/:id', customerController.getById.bind(customerController));
        this._router.post('/api/customers', customerController.create.bind(customerController));
        this._router.put('/api/customers', customerController.update.bind(customerController));
        this._router.delete('/api/customers/:id', customerController.delete.bind(customerController));
    };
    return CustomerRouter;
}());
exports.CustomerRouter = CustomerRouter;
