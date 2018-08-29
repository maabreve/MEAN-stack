import express = require('express');
import { CheckoutController  } from "../controllers/checkout.controller";

export class CheckoutRouter {

    private _router: express.Router;
    private _app: any;
    
    constructor(router: express.Router) {
        this._router = router;
        this._app = express();
    }

    createRoutes() {
        let checkoutController = new CheckoutController();
        this._router.get('/api/checkout/:customerAds', checkoutController.checkout.bind(checkoutController));
    }
}
