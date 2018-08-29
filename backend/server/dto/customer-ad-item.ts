/**
 * CustomerAdItemDto
 * Ads used by a client    
 */
class CustomerAdItemDto {
    productCode: string; 
    productPrice: number; 
    totalAds: number;

    constructor(productCode: string, productPrice: number, totalAds: number) {
        this.productCode = productCode;
        this.productPrice = productPrice;
        this.totalAds = totalAds;
    }
}

export default CustomerAdItemDto;

