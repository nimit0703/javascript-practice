import { hasFormatter } from "../Interface/hasFormatter";

export class Invoice implements hasFormatter{
    client:string;
    details:string;
    amount:number;

    constructor(c:string,d:string,a:number){
        this.client = c;
        this.details=d;
        this.amount=a;
    }

    formate(){
        return `${this.client} Owns $ ${this.amount} for  ${this.details}`
    }
}