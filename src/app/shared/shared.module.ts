import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyersService } from './services/buyers.service';
import { ProductsService } from './services/products.service';

@NgModule({
  imports: [
    CommonModule

  ],
    providers: [
        BuyersService,
        ProductsService
    ],
  declarations: []
})
export class SharedModule { }
