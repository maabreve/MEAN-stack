"use strict";
/**
 * Entity Cllient
 * name: client name
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
exports.ClientModel = mongoose.model('client', schema, 'Clients', true);
