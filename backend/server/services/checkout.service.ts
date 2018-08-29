/**
 * CheckoutService
 * Checkout Business Rules
 */
import promise from "promise";
import IPricingRulesModel from '../models/pricing-rules.model';
import CustomerAdDto from '../dto/customer-ad.dto';

/**
 * CheckoutService
 * constructor parameters:
 * customerAdDto: client usage history
 */
export class CheckoutService {
    private _customerAd: CustomerAdDto;

    constructor(customerAd: CustomerAdDto) {
    this._customerAd = customerAd;
    }

    public checkout(): Promise<number> {

        let p = new promise<number>((resolve, reject) => {
            try {
                let discount = this.getTotal();
                resolve(discount);
            } catch (exception) {
                reject(exception);
            }
        });
        return p;
    }

    /**
     * getTotal()
     * Calculates the total price of the client according to its usage history and price rules
     */
    private getTotal(): number {
        // total price
        let totalPrice: number = 0;
        
        // calculation fot all client products
        this._customerAd.items.forEach(customerAd => {
            // product price 
            let productPrice = customerAd.productPrice ?
                customerAd.productPrice :
                0;

            // add product price to totalAds
            totalPrice += (productPrice * customerAd.totalAds);

            // apply pricing rule if exist for the current product 
            let productPricingrule = this._customerAd.pricingRules.find(r => r.productCode === customerAd.productCode);
            if (productPricingrule && customerAd.totalAds > 0) {
                let discountTotal: number = 0;

                // itemsToDiscount === null -> totalAds 
                let itemsToDiscount = productPricingrule.itemsToDiscount ?
                    productPricingrule.itemsToDiscount :
                    customerAd.totalAds;
                
                // fator = productPricingrule.minimum > 0 -> Math.floor(customerAd.totalAds / productPricingrule.minimum )
                let fator = productPricingrule.minimum > 0 ?
                    Math.floor(customerAd.totalAds / (productPricingrule.minimum + 1)) :
                    1;
                
                // discount Rule:
                // itemsToDiscount * discountPercent * fator
                discountTotal = (itemsToDiscount * fator * productPrice) * (productPricingrule.discountPercent / 100);

                // deduct totalAds
                totalPrice -= discountTotal;
            }
        });

        return totalPrice;
    }
}