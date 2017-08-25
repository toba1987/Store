import { Injectable } from '@angular/core';
import { buyers } from '../../components/buyers/buyers';


@Injectable()
export class BuyersService {
    private buyers: any[];

    constructor() {
        this.buyers = buyers;
    }

    public getContacts(){
        return this.buyers;
    }

  /*  public addBuyer(firstname, lastname, email){

            this.buyers.push['firstName'] = firstname,
            this.buyers.push['lastName'] = lastname,
            this.buyers.push['email'] = email
    }*/
   public addBuyer(firstname, lastname, email) {

        this.buyers.push({
            id: this.buyers.length + 1,
            firstName: firstname,
            lastName: lastname,
            email: email
        });
    }

}
