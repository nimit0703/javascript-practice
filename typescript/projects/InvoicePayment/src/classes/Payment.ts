import { hasFormatter } from "../Interface/hasFormatter";

export class Payment implements hasFormatter{
    recipient:string;
    details:string;
    amount:number;

    constructor(c:string,d:string,a:number){
        this.recipient = c;
        this.details=d;
        this.amount=a;
    }

    formate(){
        return `${this.recipient} Owed $ ${this.amount} for  ${this.details}`
    }
}