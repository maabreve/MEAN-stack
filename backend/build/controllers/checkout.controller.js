"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkout_service_1 = require("../services/checkout.service");
var CheckoutController = /** @class */ (function () {
    function CheckoutController() {
    }
    CheckoutController.prototype.checkout = function (req, res) {
        if (!req.params.clientAds) {
            res.status(500).json("Invalid parameters");
        }
        try {
            var clientAds = req.params.clientAds ? JSON.parse(req.params.clientAds) : [];
            var checkoutService = new checkout_service_1.CheckoutService(clientAds);
            checkoutService.checkout().then(function (items) {
                res.json(items).status(200);
            })
                .catch(function (err) { return console.error.bind(console, "Error " + err); });
        }
        catch (exception) {
            res.status(500).json(exception);
        }
    };
    return CheckoutController;
}());
exports.CheckoutController = CheckoutController;
