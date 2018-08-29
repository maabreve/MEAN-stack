export class PricingRulesModel {
    public _id: string;
    public customerId: string;
    public customerName: string;
    public productId: string;
    public productCode: string;
    public minimum: number;
    public discountPercent: number;
    public itemsToDiscount?: number;

    PricingRulesModel() {

    }
}
