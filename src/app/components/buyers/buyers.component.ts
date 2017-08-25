import { Component, Inject } from '@angular/core';
//import { buyers } from './buyers';
import { BuyersService } from '../../shared/services/buyers.service';


@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html'
})
export class BuyersComponent {
    private buyers: any[];
    private firstname: string = '';
    private lastname: string = '';
    private email: string = '';


  constructor(private buyersService: BuyersService) {

      this.buyers = buyersService.getContacts();


  }


    remove(buyer){
        const index = this.buyers.indexOf(buyer);
        this.buyers.splice(index, 1);
    }

    addBuyer(){

        this.buyersService.addBuyer(this.firstname,this.lastname,this.email);

        this.firstname = '';
        this.lastname = '';
        this.email = '';

    }

}
