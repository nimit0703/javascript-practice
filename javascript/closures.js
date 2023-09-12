var a=10;
// x-->returns function 
function x(){
    var a=7;
    return function(){
        // function with it's lexical scope forms a clouser
        console.log(a);
    };
}
var a=100;
var z= x();
z(); // 7
console.log(a) // 100
