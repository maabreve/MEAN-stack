"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = __importStar(require("body-parser"));
var database_1 = __importDefault(require("./config/database"));
var mongoose = require("mongoose");
var product_router_1 = require("./routes/product.router");
var pricing_rules_router_1 = require("./routes/pricing-rules.router");
var checkout_router_1 = require("./routes/checkout.router");
var customer_router_1 = require("./routes/customer.router");
var morgan = require("morgan");
var cors = require('cors');
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.middleware();
        this.database = new database_1.default(mongoose);
        this.createRoutes();
    }
    App.prototype.closeConnection = function (message, callback) {
        this.database.closeConnection(message, function () { return callback(); });
    };
    App.prototype.middleware = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        //don't show the log when it is test
        if (process.env.ProcessEnv !== "test") {
            this.app.use(morgan('combined'));
        }
    };
    App.prototype.createRoutes = function () {
        var router = express.Router();
        router.get('/', function (req, res, next) {
            res.json({
                message: 'Hello World!'
            });
        });
        this.app.use('/', router);
        var productRouter = new product_router_1.ProductRouter(this.app);
        productRouter.createRoutes();
        var pricingRulesRouter = new pricing_rules_router_1.PricingRulesRouter(this.app);
        pricingRulesRouter.createRoutes();
        var checkoutRouter = new checkout_router_1.CheckoutRouter(this.app);
        checkoutRouter.createRoutes();
        var customerRouter = new customer_router_1.CustomerRouter(this.app);
        customerRouter.createRoutes();
    };
    return App;
}());
exports.default = new App();
