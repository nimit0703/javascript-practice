import { Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment} from './classes/Payment.js'
import { hasFormatter } from './Interface/hasFormatter.js'


const forms = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

forms.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    let doc : hasFormatter;

    let values : [string,string,number];
    values = [tofrom.value,details.value,amount.valueAsNumber];
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);

    }
    list.render(doc,type.value,'end');
})
