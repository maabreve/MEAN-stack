/**
 * CustomerAdDto
 * Customer pricing rules and usage history (checkout request)    
 * client: client
 * items: usage history grouped by product (productCode,productPrice,totalAds)
 * pricingRules: client pricing rules
)
 */
import CustomerAdItemDto from './customer-ad-item';
import IPricingRulesModel from '../models/pricing-rules.model';

class CustomerAdDto {
    client: string;
    items: Array<CustomerAdItemDto>;
    pricingRules: Array<IPricingRulesModel>;

    constructor(client: string, items: Array<CustomerAdItemDto>, pricingRules: Array<IPricingRulesModel>){
        this.client = client;
        this.items = items;
        this.pricingRules = pricingRules;
    }
}

export default CustomerAdDto;