import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyersService } from '../../../shared/services/buyers.service';
import { products } from './../../products/products';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
})
export class BuyerDetailsComponent implements OnInit {
    private buyer: any = {};
    private products: any[] = [];

    constructor(private route: ActivatedRoute,
                private buyersService: BuyersService) {

    }

    ngOnInit() {
        this.route.params.subscribe(() => {
            let id = parseInt(this.route.snapshot.paramMap.get('id'));
            this.buyer = this.buyersService.getBuyers().find(item => item['id'] == id);
            this.products = products.filter((p) => {
                return this.buyer.products.indexOf(p.id) > -1;
            })

        });
    }

}
