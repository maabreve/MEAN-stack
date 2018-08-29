/**
 * PricingRulesController
 */
import express = require("express");
import { BaseController } from './base/base.controller';
import { PricingRulesService } from '../services/pricing-rules.service';
export class PricingRulesController<T> extends BaseController<T> {
    
    public getByClient(req: express.Request, res: express.Response) {
        const params = { client: req.params.client };
        
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
