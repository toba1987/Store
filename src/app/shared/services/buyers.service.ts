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
}
