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

    updateProduct(product: any)
    {
        let products = this.productItems;
        for (var i = 0; i < products.length; i++)
        {
            if (product == products[i])
            {
                product = products[i];
                return products;
            }
        }
    }

    deleteProduct(product: Product)
    {
        this.productItems.splice(this.productItems.indexOf(product), 1);
    }
}