import { PricingRulesRepository } from '../repositories/pricing-rules.repository';
import { PricingRulesModel } from '../models/pricing-rules.model';
import { PricingRulesService } from '../services/pricing-rules.service';
import { PricingRulesController } from '../controllers/pricing-rules.controller';
import express = require('express');

export class PricingRulesRouter {

    private _router: express.Router;
    private _app: any;
    
    constructor(router: express.Router) {
        this._router = router;
        this._app = express();
    }

    createRoutes() {
        var pricingRulesRepository = new PricingRulesRepository(PricingRulesModel);
        var pricingRulesService= new PricingRulesService(pricingRulesRepository);
        var pricingRulesController = new PricingRulesController(pricingRulesService);
        
        this._router.get('/api/pricing-rules', pricingRulesController.getAll.bind(pricingRulesController));
        this._router.get('/api/pricing-rules/:id', pricingRulesController.getById.bind(pricingRulesController));
        this._router.get('/api/pricing-rules/client/:client', pricingRulesController.getByCustomer.bind(pricingRulesController));
        this._router.post('/api/pricing-rules', pricingRulesController.create.bind(pricingRulesController));
        this._router.put('/api/pricing-rules/:id', pricingRulesController.update.bind(pricingRulesController));
        this._router.delete('/api/pricing-rules/:id', pricingRulesController.delete.bind(pricingRulesController));
    }
}
