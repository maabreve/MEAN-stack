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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_1 = __importDefault(require("promise"));
var base_service_1 = require("./base/base.service");
var PricingRulesService = /** @class */ (function (_super) {
    __extends(PricingRulesService, _super);
    function PricingRulesService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PricingRulesService.prototype.getByClient = function (params) {
        var _this = this;
        var p = new promise_1.default(function (resolve, reject) {
            _this._repo.getAll(params).exec(function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        resolve(res);
                    }
                    else {
                        resolve(undefined);
                    }
                }
            });
        });
        return p;
    };
    return PricingRulesService;
}(base_service_1.BaseService));
exports.PricingRulesService = PricingRulesService;
