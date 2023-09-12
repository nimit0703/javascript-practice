var globalVar = 10;
function myFunction(){
    var functionVar = 10;
    console.log("inside myFunction: ", globalVar, functionVar) 
    // it will work bcz function can user their local variables and thier lexical parent's variables
    
    function innerFunction(){
        var innerVariable = 100;
        console.log("inside InnerFunction: ",globalVar,functionVar,innerVariable);
        // it will work bcz function can user their local variables and thier lexical parent's variables
    }
    innerFunction() // calling innerFunction

    console.log("innerFunction's var out of it: ", innerVariable);  //error
    // this will give error bcz outside of inner function it's variable is unknown;
}

myFunction() // calling myFunction

console.log("myFunction's var out of it: ", functionVar); //error
// this will give error bcz outside of myFunction it's variable is unknown;


