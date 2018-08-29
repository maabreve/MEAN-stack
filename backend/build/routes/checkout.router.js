"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var checkout_controller_1 = require("../controllers/checkout.controller");
var CheckoutRouter = /** @class */ (function () {
    function CheckoutRouter(router) {
        this._router = router;
        this._app = express();
    }
    CheckoutRouter.prototype.createRoutes = function () {
        var checkoutController = new checkout_controller_1.CheckoutController();
        this._router.get('/api/checkout/:customerAds', checkoutController.checkout.bind(checkoutController));
    };
    return CheckoutRouter;
}());
exports.CheckoutRouter = CheckoutRouter;
