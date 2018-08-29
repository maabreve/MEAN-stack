/**
 * Entity Cllient
 * name: customer name 
 */

import mongoose = require("mongoose");

export let Schema = mongoose.Schema;

export default interface ICustomerModel extends mongoose.Document {
    name: string;
}

let schema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export let CustomerModel  = mongoose.model<ICustomerModel>('customer', schema, 'Customers', true);