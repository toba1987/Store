import { Component, Inject } from '@angular/core';
//import { buyers } from './buyers';
import { BuyersService } from '../../shared/services/buyers.service';


@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html'
})
export class BuyersComponent {
    private buyers: any[];

  constructor(private buyersService: BuyersService) {

      this.buyers = buyersService.getContacts();


  }


    remove(buyer){
        const index = this.buyers.indexOf(buyer);
        this.buyers.splice(index, 1);
    }

}
