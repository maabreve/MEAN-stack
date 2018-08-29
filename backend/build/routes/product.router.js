"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_repository_1 = require("../repositories/product.repository");
var product_model_1 = require("../models/product.model");
var express = require("express");
var product_controller_1 = require("../controllers/product.controller");
var product_service_1 = require("../services/product.service");
var ProductRouter = /** @class */ (function () {
    function ProductRouter(router) {
        this._router = router;
        this._app = express();
    }
    ProductRouter.prototype.createRoutes = function () {
        var productRepository = new product_repository_1.ProductRepository(product_model_1.ProductModel);
        var productService = new product_service_1.ProductService(productRepository);
        var productController = new product_controller_1.ProductController(productService);
        this._router.get('/api/products', productController.getAll.bind(productController));
        this._router.get('/api/products/:id', productController.getById.bind(productController));
        this._router.get('/api/products/code/:code', productController.getByCode.bind(productController));
        this._router.post('/api/products', productController.create.bind(productController));
        this._router.put('/api/products', productController.update.bind(productController));
        this._router.delete('/api/products/:id', productController.delete.bind(productController));
    };
    return ProductRouter;
}());
exports.ProductRouter = ProductRouter;
