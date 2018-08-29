# Ads Management
A backend layer for ads managment

# 1. Technologies
```
NodeJS v8.9.1 / npm v5.5.1 - Server
MongDB v4.0.0 - NoSql database
Typescript - Javascript object oriented
```

# 2. Prerequisites
```
Node / Npm 
  - https://nodejs.org/en/download/
  
MongoDb
  - https://www.mongodb.com/download-center

Typescript: Execute the commands in a terminal
  - npm install -g typescript
  - npm install -g tsc
```

# 3. App Up and Running 
```
MongoDB
* Execute mongod.exe in a separated terminal 

Application
* Download code git clone https://github.com/maabreve/catho.git 
* npm start
```

# 4. Entities Business

## 4.1. PricingRules Entity
This document store the clients pricing rules for discount. 

The model was designed to fit in different scenarios:

* Get x for y Deal: Ex: Get 3 ads for 2 deals for this product
* Drop price if buy minimum - Ex: If buy minimum 4 ads for this product, the price drops 10%
* Drop price regardless minimum - Ex: The price drops 10% for all ads for this product

### 4.1.1. Fields
  * client: string - client code
  * productCode: string - product code 
  * minimum: number - minimum number of products purchased to grant the discount
  * discountPercent: number - discount percentage to apply
  * itemsToDiscount: number - quantity of items for the discount. If not present, the discount will be applied for all ads 
 
 #### Examples:
 
 Get 3 for 2 Deal: If buy 2 products, get 100% in 1 product
 * minimum: 2
 * discountPercent: 100
 * itemsToDiscount: 1 
 
 Get 5 for 4 Deal: If buy 4 products, get 100% in 1 product
 * minimum: 4
 * discountPercent: 100
 * itemsToDiscount: 1 
 
 Drop price if buy more than x products: If buy 4 products, price drop 10% for all products
 * minimum: 4
 * discountPercent: 10
 * itemsToDiscount: null
 
 Drop price regardless of the quantity purchased: price drop 10% for all products
 * minimum: 0
 * discountPercent: 10
 * itemsToDiscount: null
 
 
## 4.2. ClientAdDto
Object to store the client usage history and its pricing rules. Not persisted in database, used just for transfer information to checkout api.

### 4.2.1. Fields
  * client: string - client code
  * items: Array<ClientAdItemDto> - Client usage history array
      * productCode: string - product code
      * productPrice: number - original product price
      * totalAds: total ads for the product used by the customer
  * pricingRules: Array<IPricingRulesModel> - Client pricing rules array


## 4.3. Product
Document to store product details

### 4.3.1. Fields
   * code: string - product code
   * name: string - product name
   * price: number - product price
   
   
   
## 5. Testing

### 5.1. Rule: Discount for all ads, regardless the minimum
 ```  
PRICING RULES
Client: Nike
Product: Premium
Product Price: 100
Discount Percent: 10%
Minimum: 0
```

```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 1}], "pricingRules": [{"productCode": "Premium", "minimum":  0, "discountPercent": 10}]}

      TotalAds: 1
      Expected Result: 90
```

```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 2}], "pricingRules": [{"productCode": "Premium", "minimum":  0, "discountPercent": 10}]}
     
     TotalAds: 2
     Expected Result: 180
```     

```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 3}], "pricingRules": [{"productCode": "Premium", "minimum":  0, "discountPercent": 10}]}
     
     TotalAds: 3
     Expected Result: 270

```

```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 4}], "pricingRules": [{"productCode": "Premium", "minimum":  0, "discountPercent": 10}]}
     
     TotalAds: 4
     Expected Result: 360
```

### 5.2. Rule: Discount for all ads if buy > x ads 
```
PRICING RULES
Client: Nike
Product: Premium
Product Price: 100
Discount Percent: 10%
Minimum: 4
```

```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 1}], "pricingRules": [{"productCode": "Premium", "minimum":  3, "discountPercent": 10}]}
     
     TotalAds: 1
     Expected Result: 100 (< 4 = no discount)
```

```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 2}], "pricingRules": [{"productCode": "Premium", "minimum":  3, "discountPercent": 10}]}
 
      TotalAds: 2
      Expected Result: 200 (< 4 = no discount)
```

```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 3}], "pricingRules": [{"productCode": "Premium", "minimum":  3, "discountPercent": 10}]}
      
      TotalAds: 3
      Expected R0esult: 300 (< 4 = no discount)2
 ```  
 
 ```
   http://localhost:3040/api/checkout/{"Ilieitemsnt to Discount: 1": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 4}], "pricingRules": [{"productCode": "Premium", "minimum":  3, "discountPercent": 10}]}
     
     TotalAds: 4
     Expected Result: 360 (>=4 ads - 10% discount for all ads)
 ```    

### 5.3. Rule: Get 3 for 2 Deal 
```
PRICING RULES
Client: Nike
Product: Premium
Product Price: 100
Discount Percent: 100%
Minimum: 2
Items to Discount: 1
```

```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 1}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}
     
     TotalAds: 1
     Expected Result: 100 
```     
     
 ```
 http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 2}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}
     
     TotalAds: 2
     Expected Result: 200
 ```
 
 ```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 3}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}
     
     TotalAds: 3
     Expected Result: 200 (get 3 for 2 deal)
```     

```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 4}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}

     TotalAds: 4
     Expected Result: 300 
```
   
```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 5}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}

     TotalAds: 5
     Expected Result: 400 
```

```
http://localhost:3040/api/checkout/{"client": "Nike", "items": [{"productCode": "Premium", "productPrice": 100,"totalAds": 6}], "pricingRules": [{"productCode": "Premium", "minimum":  2, "discountPercent": 100, "itemsToDiscount": 1}]}

     TotalAds: 6
     Expected Result: 400 

```     


## 6. Architecure

The architecture was designed using the `Model, Repository, Service, Controller` pattern.

### 6.1. Layers
```
1. Model: Database entities structure
2. Repository: Database operations
3. Services: Business rules handler
4. Controller: HTTP request/response handler
```

### 6.2. Generics
There are base classes and interfaces using generics with the basic CRUD operations for Repositories, Services and Controller layers. Classes inherit from the base class with all basic operations
  

#### 6.3. Folder Structure

```
├───config
│       database.ts
│
├───controllers
│   │   checkout.controller.ts
│   │   pricing-rules.controller.ts
│   │   product.controller.ts
│   │
│   └───base
│           base.controller.ts
│
├───dto
│       client-ad-item.ts
│       client-ad.dto.ts
│
├───models
│       pricing-rules.model.ts
│       product.model.ts
│
├───repositories
│   │   pricing-rules.repository.ts
│   │   product.repository.ts
│   │
│   └───base
│           base.repository.ts
│           irepository.ts
│
├───routes
│       checkout.router.ts
│       pricing-rules.router.ts
│       product.router.ts
│
└───services
    │   checkout.service.ts
    │   pricing-rules.service.ts
    │   product.service.ts
    │
    └───base
            base.service.ts
            iservice.ts
```



## 7. Endpoints

#### 7.1. Checkout
    * /api/checkout/:clientAds

#### 7.2. Pricing Rules CRUD
    * GET /api/pricing-rules
    * GET /api/pricing-rules/:id
    * GET /api/pricing-rules/client/:clientecode - Get by Client Code
    * POST /api/pricing-rules
    * PUT /api/pricing-rules
    * DELETE /api/pricing-rules/:id

#### 7.3. Product CRUD
    * GET /api/products
    * GET /api/products/:id
    * GET /api/products/code/:code - Get by Client Code
    * POST /api/products
    * PUT /api/products
    * DELETE /api/products/:id

