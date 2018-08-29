var app = require('../../server/app'),
    chai = require('chai'),
    request = require('supertest');

    /**
     * Rule: Discount for all  
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 1}], "pricingRules": [{"productCode": "Premium", "minimum":  0, "discountPercent": 10}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 2}], "pricingRules": [{"productCode": "Premium", "minimum":  0, "discountPercent": 10}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 3}], "pricingRules": [{"productCode": "Premium", "minimum":  0, "discountPercent": 10}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 4}], "pricingRules": [{"productCode": "Premium", "minimum":  0, "discountPercent": 10}]}
     * 
     * Rule: Discount for all buying > than x ads 
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 1}], "pricingRules": [{"productCode": "Premium", "minimum":  3, "discountPercent": 10}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 2}], "pricingRules": [{"productCode": "Premium", "minimum":  3, "discountPercent": 10}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 3}], "pricingRules": [{"productCode": "Premium", "minimum":  3, "discountPercent": 10}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 4}], "pricingRules": [{"productCode": "Premium", "minimum":  3, "discountPercent": 10}]}
     * 
     * Rule: Get x for y 
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 1}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 2}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 3}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 4}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 5}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}
     * http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 6}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}
     */



describe('Todos list API Integration Tests', function () {
    describe('#GET / tasks', function () {
        it('should get all tasks', function (done) {
            request(app).get('/api/products')
                .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });
});

