import { CustomerRepository } from '../repositories/customer.repository';
import { CustomerModel } from '../models/customer.model';
import express = require('express');
import { CustomerController } from '../controllers/customer.controller';
import { CustomerService } from '../services/customer.service';

export class CustomerRouter {

    private _router: express.Router;
    private _app: any;
    
    constructor(router: express.Router) {
        this._router = router;
        this._app = express();
    }

    createRoutes() {
        var customerRepository = new CustomerRepository(CustomerModel);
        var customerService = new CustomerService(customerRepository);
        var customerController = new CustomerController(customerService);
        
        this._router.get('/api/customers', customerController.getAll.bind(customerController));
        this._router.get('/api/customers/:id', customerController.getById.bind(customerController));
        this._router.post('/api/customers', customerController.create.bind(customerController));
        this._router.put('/api/customers', customerController.update.bind(customerController));
        this._router.delete('/api/customers/:id', customerController.delete.bind(customerController));
    }
}
