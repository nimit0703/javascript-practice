import { Invoice} from './classes/Invoice.js';



let inv1 = new Invoice('bob','painting ',300);
console.log(inv1.format());








const forms = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


forms.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    )
})
