/**
 * Checkout controller
 * Handler http parameters to call checkout service
*/
import express = require("express");
import { CheckoutService } from "../services/checkout.service";
import IPricingRulesModel from '../models/pricing-rules.model';
import CustomerAdDto from '../dto/customer-ad.dto';

export class CheckoutController {

    constructor() {
    }

    public checkout(req: express.Request, res: express.Response) {

        if (!req.params.customerAds) {
            res.status(500).json("Invalid parameters");
        }

        try {
            const customerAds: CustomerAdDto = req.params.customerAds ? JSON.parse(req.params.customerAds) : [];
            const checkoutService: CheckoutService = new CheckoutService(customerAds);
            checkoutService.checkout().then(items => {
                res.json(items).status(200);
            })
                .catch(err => console.error.bind(console, `Error ${err}`))

        } catch (exception) {
            res.status(500).json(exception);
        }
    }
}
