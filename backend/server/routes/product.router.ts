import { ProductRepository } from '../repositories/product.repository';
import { ProductModel } from '../models/product.model';
import express = require('express');
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';

export class ProductRouter {

    private _router: express.Router;
    private _app: any;
    
    constructor(router: express.Router) {
        this._router = router;
        this._app = express();
    }

    createRoutes() {
        var productRepository = new ProductRepository(ProductModel);
        var productService = new ProductService(productRepository);
        var productController = new ProductController(productService);
        
        this._router.get('/api/products', productController.getAll.bind(productController));
        this._router.get('/api/products/:id', productController.getById.bind(productController));
        this._router.get('/api/products/code/:code', productController.getByCode.bind(productController));
        this._router.post('/api/products', productController.create.bind(productController));
        this._router.put('/api/products', productController.update.bind(productController));
        this._router.delete('/api/products/:id', productController.delete.bind(productController));
    }
}
