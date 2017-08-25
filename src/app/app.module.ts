import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import { BuyerDetailsComponent } from './components/buyers/buyer-details/buyer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BuyersComponent,
    ProductsComponent,
    BuyerDetailsComponent

  ],
  imports: [
    BrowserModule,
      FormsModule,
      AppRoutingModule,
      SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
