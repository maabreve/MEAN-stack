"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pricing_rules_repository_1 = require("../repositories/pricing-rules.repository");
var pricing_rules_model_1 = require("../models/pricing-rules.model");
var pricing_rules_service_1 = require("../services/pricing-rules.service");
var pricing_rules_controller_1 = require("../controllers/pricing-rules.controller");
var express = require("express");
var PricingRulesRouter = /** @class */ (function () {
    function PricingRulesRouter(router) {
        this._router = router;
        this._app = express();
    }
    PricingRulesRouter.prototype.createRoutes = function () {
        var pricingRulesRepository = new pricing_rules_repository_1.PricingRulesRepository(pricing_rules_model_1.PricingRulesModel);
        var pricingRulesService = new pricing_rules_service_1.PricingRulesService(pricingRulesRepository);
        var pricingRulesController = new pricing_rules_controller_1.PricingRulesController(pricingRulesService);
        this._router.get('/api/pricing-rules', pricingRulesController.getAll.bind(pricingRulesController));
        this._router.get('/api/pricing-rules/:id', pricingRulesController.getById.bind(pricingRulesController));
        this._router.get('/api/pricing-rules/client/:client', pricingRulesController.getByCustomer.bind(pricingRulesController));
        this._router.post('/api/pricing-rules', pricingRulesController.create.bind(pricingRulesController));
        this._router.put('/api/pricing-rules/:id', pricingRulesController.update.bind(pricingRulesController));
        this._router.delete('/api/pricing-rules/:id', pricingRulesController.delete.bind(pricingRulesController));
    };
    return PricingRulesRouter;
}());
exports.PricingRulesRouter = PricingRulesRouter;
