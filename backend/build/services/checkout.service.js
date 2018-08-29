"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CheckoutService
 * Checkout Business Rules
 */
var promise_1 = __importDefault(require("promise"));
/**
 * CheckoutService
 * constructor parameters:
 * clientAdDto: client usage history
 */
var CheckoutService = /** @class */ (function () {
    function CheckoutService(clientAd) {
        this._clientAd = clientAd;
    }
    CheckoutService.prototype.checkout = function () {
        var _this = this;
        var p = new promise_1.default(function (resolve, reject) {
            try {
                var discount = _this.getTotal();
                resolve(discount);
            }
            catch (exception) {
                reject(exception);
            }
        });
        return p;
    };
    /**
     * getTotal()
     * Calculates the total price of the client according to its usage history and price rules
     */
    CheckoutService.prototype.getTotal = function () {
        var _this = this;
        // total price
        var totalPrice = 0;
        // calculation fot all client products
        this._clientAd.items.forEach(function (clientAd) {
            // product price 
            var productPrice = clientAd.productPrice ?
                clientAd.productPrice :
                0;
            // add product price to totalAds
            totalPrice += (productPrice * clientAd.totalAds);
            // apply pricing rule if exist for the current product 
            var productPricingrule = _this._clientAd.pricingRules.find(function (r) { return r.productCode === clientAd.productCode; });
            if (productPricingrule && clientAd.totalAds > 0) {
                var discountTotal = 0;
                // itemsToDiscount === null -> totalAds 
                var itemsToDiscount = productPricingrule.itemsToDiscount ?
                    productPricingrule.itemsToDiscount :
                    clientAd.totalAds;
                // fator = productPricingrule.minimum > 0 -> Math.floor(clientAd.totalAds / productPricingrule.minimum )
                var fator = productPricingrule.minimum > 0 ?
                    Math.floor(clientAd.totalAds / (productPricingrule.minimum + 1)) :
                    1;
                // discount Rule:
                // itemsToDiscount * discountPercent * fator
                discountTotal = (itemsToDiscount * fator * productPrice) * (productPricingrule.discountPercent / 100);
                // deduct totalAds
                totalPrice -= discountTotal;
            }
        });
        return totalPrice;
    };
    return CheckoutService;
}());
exports.CheckoutService = CheckoutService;
