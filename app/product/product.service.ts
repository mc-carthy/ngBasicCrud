import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCT_ITEMS } from './product-data';

@Injectable()
export class ProductService {

    private productItems = PRODUCT_ITEMS

    constructor() { }

    getProducts(): Product[] {
        return this.productItems;
    }

    addProduct(product: Product)
    {
        this.productItems.push(product);
    }

    updateProduct(product: Product)
    {

    }
}