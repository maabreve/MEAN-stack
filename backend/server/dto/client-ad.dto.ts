/**
 * ClientAdDto
 * Client pricing rules and usage history (checkout request)    
 * client: client
 * items: usage history grouped by product (productCode,productPrice,totalAds)
 * pricingRules: client pricing rules
)
 */
import ClientAdItemDto from './client-ad-item';
import IPricingRulesModel from '../models/pricing-rules.model';

class ClientAdDto {
    client: string;
    items: Array<ClientAdItemDto>;
    pricingRules: Array<IPricingRulesModel>;

    constructor(client: string, items: Array<ClientAdItemDto>, pricingRules: Array<IPricingRulesModel>){
        this.client = client;
        this.items = items;
        this.pricingRules = pricingRules;
    }
}

export default ClientAdDto;