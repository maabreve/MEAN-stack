"use strict";
/**
 * Entity Cllient
 * name: customer name
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.Schema = mongoose.Schema;
var schema = new exports.Schema({
    name: {
        type: String,
        required: true
    }
});
exports.CustomerModel = mongoose.model('customer', schema, 'Customers', true);
