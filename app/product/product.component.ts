import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {

    products: Product[];
    newProduct: any = {};
    productForm: boolean = false;
    isNewForm: boolean;

    constructor (
        private productService : ProductService
    )
    { }

    ngOnInit()
    {
        this.getProducts();
    }

    getProducts()
    {
        this.products = this.productService.getProducts();
    }

    // Consider using a clone object so the info in the table isn't updated as
    // the user is typing
    editProduct(product: Product)
    {
        if (!product)
        {
            this.productForm = false;
            return;
        }
        this.productForm = true;
        this.isNewForm = false;
        this.newProduct = product;
    }

    addProduct()
    {
        if (this.products.length)
        {
            this.newProduct = {};
        }
        this.productForm = true;
        this.isNewForm = true;
    }

    saveProduct(product: Product)
    {
        if (this.isNewForm)
        {
            this.productService.addProduct(product);
        }
        else
        {
            this.productService.updateProduct(product);
        }
        this.productForm = false;
    }

    deleteProduct(product: Product)
    {
        this.productService.deleteProduct(product);
    }

    cancelForm()
    {
        this.newProduct = {};
        this.productForm = false;
    }

}
