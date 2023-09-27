export class Payment {
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    formate() {
        return `${this.recipient} Owed $ ${this.amount} for  ${this.details}`;
    }
}
