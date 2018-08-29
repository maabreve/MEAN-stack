/**
 * Entity Product
 * code: product code
 * name: product name 
 * price: product price 
 */

import mongoose = require("mongoose");

export let Schema = mongoose.Schema;

export default interface IProductModel extends mongoose.Document {
    code: string;
    name: string;
    price: number;
}

let schema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

export let ProductModel  = mongoose.model<IProductModel>('product', schema, 'Products', true);