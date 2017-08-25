import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyersService } from './services/buyers.service';

@NgModule({
  imports: [
    CommonModule

  ],
    providers: [
        BuyersService
    ],
  declarations: []
})
export class SharedModule { }
