import { Injectable } from '@angular/core';
import { buyers } from '../../components/buyers/buyers';


@Injectable()
export class BuyersService {
    private buyers: any[];

    constructor() {
        this.buyers = buyers;
    }

    public getBuyers(){
        return this.buyers;
    }

   public addBuyer(firstname, lastname, email) {

        this.buyers.push({
            id: this.buyers.length + 1,
            firstName: firstname,
            lastName: lastname,
            email: email
        });
    }

}
