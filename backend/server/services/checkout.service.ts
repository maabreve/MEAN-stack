/**
 * CheckoutService
 * Checkout Business Rules
 */
import promise from "promise";
import IPricingRulesModel from '../models/pricing-rules.model';
import ClientAdDto from '../dto/client-ad.dto';

/**
 * CheckoutService
 * constructor parameters:
 * clientAdDto: client usage history
 */
export class CheckoutService {
    private _clientAd: ClientAdDto;

    constructor(clientAd: ClientAdDto) {
    this._clientAd = clientAd;
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
        this._clientAd.items.forEach(clientAd => {
            // product price 
            let productPrice = clientAd.productPrice ?
                clientAd.productPrice :
                0;

            // add product price to totalAds
            totalPrice += (productPrice * clientAd.totalAds);

            // apply pricing rule if exist for the current product 
            let productPricingrule = this._clientAd.pricingRules.find(r => r.productCode === clientAd.productCode);
            if (productPricingrule && clientAd.totalAds > 0) {
                let discountTotal: number = 0;

                // itemsToDiscount === null -> totalAds 
                let itemsToDiscount = productPricingrule.itemsToDiscount ?
                    productPricingrule.itemsToDiscount :
                    clientAd.totalAds;
                
                // fator = productPricingrule.minimum > 0 -> Math.floor(clientAd.totalAds / productPricingrule.minimum )
                let fator = productPricingrule.minimum > 0 ?
                    Math.floor(clientAd.totalAds / (productPricingrule.minimum + 1)) :
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