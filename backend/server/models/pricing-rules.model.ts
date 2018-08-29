/**
 * Entity PricingRulesModel (client pricing rules) 
 * client: client code
 * productCode: rule product 
 * minimum: minimum number of products purchased to grant the discount
 * discountPercent: discount percentage to apply
 * itemsToDiscount: quantity of items for the discount. 
 *                  If not present, the discount will be applied
 *                  for all ads 
 *
 * Examples:
 * 
 * Get 3 for 2 Deal: If buy 2 products, get 100% in 1 product
 * minimum: 2
 * discountPercent: 100
 * itemsToDiscount: 1 
 
 * Get 5 for 4 Deal: If buy 4 products, get 100% in 1 product
 * minimum: 4
 * discountPercent: 100
 * itemsToDiscount: 1 
 
 * Drop price if buy more than x products: If buy 4 products, price drop 10% for all products
 * minimum: 4
 * discountPercent: 10
 * itemsToDiscount: null
 
 * Drop price regardless of the quantity purchased: price drop 10% for all products
 * minimum: 0
 * discountPercent: 10
 * itemsToDiscount: null
 
 */

import mongoose = require("mongoose");

export let Schema = mongoose.Schema;

export default interface IPricingRulesModel extends mongoose.Document {
    customerId: string;
    customerName: string;
    productId: string;
    productCode: string;
    minimum: number;
    discountPercent: number;
    itemsToDiscount?: number;
}

let schema = new Schema({
    customerId: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productCode: {
        type: String,
        required: true
    },
    minimum: {
        type: Number,
        required: true
    },
    discountPercent: {
        type: Number,
        required: true
    },
    itemsToDiscount: {
        type: Number,
        required: false
    }
});

export let PricingRulesModel  = mongoose.model<IPricingRulesModel>('checkout', schema, 'PricingRuless', true);