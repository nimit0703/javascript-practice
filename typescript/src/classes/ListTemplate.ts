import { hasFormatter } from "../Interface/hasFormatter";

export class ListTemplate{

    constructor(private container:HTMLUListElement){};

    render(item:hasFormatter,heading:string,pos:'start' | 'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.appendChild(h4);

        const p = document.createElement('p');
        p.innerText = item.formate();
        li.appendChild(p);

        if(pos === 'start'){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }

    }

}