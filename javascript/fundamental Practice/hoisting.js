console.log("a: ",a);
// console.log("b: ",b); // will give ref error bcz let don't allow Hoisting and it's call before declare
// console.log("c: ",c); // will give ref error bcz const don't allow Hoisting and it's call before declare


var a=10;
let b=10;
const c=10;


console.log("a: ",a);   // will work
console.log("b: ",b);   // will work
console.log("c: ",c);   // will work