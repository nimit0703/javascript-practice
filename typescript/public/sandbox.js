import { Invoice } from './classes/Invoice.js';
let inv1 = new Invoice('bob', 'painting ', 300);
console.log(inv1.format());
const forms = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
forms.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
