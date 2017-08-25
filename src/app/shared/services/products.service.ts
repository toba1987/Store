import { Injectable } from '@angular/core';
import { products } from '../../components/products/products';

@Injectable()
export class ProductsService {
  private products: any[];

    constructor() {
        this.products = products;
    }

    public getProducts(){
        return this.products;
    }

}
