export interface Order {
    name: string;
    shippingMethod: string;
    orderDate: string;
    lastBrokered: string;
    productCode: string;
    productDescription: string;
    stockQuantity: number;
    productVariant: string;
    category: string[];
}