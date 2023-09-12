function Counter(){
    let count=0;
    this.increment = ()=>{
        count++;
        console.log("incremented : " ,count);
    }
    this.decrement = ()=>{
        count--;
        console.log("decremnted : " ,count);
    }
}

let counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
counter1.decrement();
counter1.decrement();
counter1.decrement();
counter1.decrement();