/**
 * Checkout controller
 * Handler http parameters to call checkout service
*/
import express = require("express");
import { CheckoutService } from "../services/checkout.service";
import IPricingRulesModel from '../models/pricing-rules.model';
import ClientAdDto from '../dto/client-ad.dto';

export class CheckoutController {

    constructor() {
    }

    public checkout(req: express.Request, res: express.Response) {

        if (!req.params.clientAds) {
            res.status(500).json("Invalid parameters");
        }

        try {
            const clientAds: ClientAdDto = req.params.clientAds ? JSON.parse(req.params.clientAds) : [];
            const checkoutService: CheckoutService = new CheckoutService(clientAds);
            checkoutService.checkout().then(items => {
                res.json(items).status(200);
            })
                .catch(err => console.error.bind(console, `Error ${err}`))

        } catch (exception) {
            res.status(500).json(exception);
        }
    }
}
