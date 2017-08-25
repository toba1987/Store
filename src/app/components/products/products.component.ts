import { Component } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
    private products: any[];

    constructor(private productsService: ProductsService) {

        this.products = productsService.getProducts();


    }


}
