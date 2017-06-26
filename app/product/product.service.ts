import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

    constructor() { }

    getProducts(): Product[] {
        return [
            {
                id: 1,
                name: "Scissors",
                description: "They cut things",
                price: 4.99
            },
            {
                id: 2,
                name: "Steak knives",
                description: "They cut other things",
                price: 10.99
            },
            {
                id: 3,
                name: "Shot Glass",
                description: "They hold shots",
                price: 7.99
            },
        ]
    }
}