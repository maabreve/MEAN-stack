/**
 * PricingRulesController
 */
import express = require("express");
import { BaseController } from './base/base.controller';
import { PricingRulesService } from '../services/pricing-rules.service';
export class PricingRulesController<T> extends BaseController<T> {
    
    public getByCustomer(req: express.Request, res: express.Response) {
        const params = { customerName: req.params.customerName };
        
        if (!params) {
            this._sendReponse(res, httpStatus.OK, 'Not found!');
        } else {
            this._baseService.getAll(params) 
                .then(items => {
                    res.json(items).status(200);
                })
                .catch(err => console.error.bind(console, `Error ${err}`))
        }
    }
}
