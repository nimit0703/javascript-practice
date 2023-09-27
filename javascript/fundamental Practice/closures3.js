/*
let counter = 0;
function increment(){
    counter++;
    console.log(counter);
}
increment();
increment();
increment();
counter =100;
increment(); 

// data hiding is not possible purpose of counter is not fullfilled
*/

// we use closures  for data hiding purpose also

function counter(){
    let c=0;
    return function increment(){
        c++;
        console.log("counter :",c);
    };
}

var count1 = counter();
count1();
count1();
count1();
console.log(c); // here we dont have access to c
