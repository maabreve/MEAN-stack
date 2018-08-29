"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_controller_1 = require("./base/base.controller");
var PricingRulesController = /** @class */ (function (_super) {
    __extends(PricingRulesController, _super);
    function PricingRulesController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PricingRulesController.prototype.getByClient = function (req, res) {
        var params = { client: req.params.client };
        if (!params) {
            this._sendReponse(res, httpStatus.OK, 'Not found!');
        }
        else {
            this._baseService.getAll(params)
                .then(function (items) {
                res.json(items).status(200);
            })
                .catch(function (err) { return console.error.bind(console, "Error " + err); });
        }
    };
    return PricingRulesController;
}(base_controller_1.BaseController));
exports.PricingRulesController = PricingRulesController;
