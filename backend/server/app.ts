import express = require('express');
import * as bodyParser from "body-parser";
import DataBase from './config/database';
import mongoose = require("mongoose");
import { ProductRouter } from './routes/product.router';
import { PricingRulesRouter } from './routes/pricing-rules.router';
import { CheckoutRouter } from './routes/checkout.router';
import { CustomerRouter } from './routes/customer.router';
import morgan = require('morgan');
var cors = require('cors')

class App {
    public app: express.Application;
    private database: DataBase;

    constructor() {
        this.app = express();
        this.middleware();
        this.database = new DataBase(mongoose);
        this.createRoutes();
    }


    closeConnection(message: string, callback: any) {
        this.database.closeConnection(message, () => callback());
    }

    middleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        //don't show the log when it is test
        if(process.env.ProcessEnv !== "test") {
            this.app.use(morgan('combined')); 
        }
    }

    createRoutes() {

        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        
        this.app.use('/', router);

        let productRouter = new ProductRouter(this.app);
        productRouter.createRoutes();

        let pricingRulesRouter = new PricingRulesRouter(this.app);
        pricingRulesRouter.createRoutes();

        let checkoutRouter = new CheckoutRouter(this.app);
        checkoutRouter.createRoutes();

        let customerRouter = new CustomerRouter(this.app);
        customerRouter.createRoutes();
    }
}

export default new App();
