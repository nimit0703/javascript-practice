/**
 * debounce_fun maxwait how to use
 */


var count =0;
var gfg = _.after(3, function () {
    console.log('ran 3 times done');
  });

var gfg = _.before(3, function () {
    count++;
    console.log('ran only ',count,"times");
});

// gfg();
// gfg();

// console.log(_.map(['6', '8', '10'],_.ary(parseInt,1)));

// Lodash variable


var obj = {
	Name: "GeeksforGeeks",
	Address: "Noida"
};
	
var fun = function (Geeks) {
	return 'Welcome to ' + this.Name
		+ '\nAddress: ' + this.Address
};
	
var func = _.bind(fun, obj);

// console.log(func());




// Defining object parameter of this method
var obj = {
'author': 'Nidhi',
'welcome': function(greet, mark) {
	return greet + ' ' + this.author + mark;
}
};

// Using the _.bindKey() method
// with its parameters
// var bound_fun =
// _.bindKey(obj, 'welcome', 'Hey');

// Calling bound_fun by passing its value
// console.log(bound_fun(''));

function sum(a, b, c, d){
    return a + b + c + d;
}

let curry = _.curry(sum);
let res = curry(3)(4)(5);
// console.log("ans:",res(6));

var abc = function(a, b, c) {
	return [a, b, c];
  };

var curried = _.curry(abc);
var curriedR = _.curryRight(abc);

// console.log(curried(3)(2)(1));
// console.log(curriedR(3)(2)(1));

var debounce_fun = _.debounce(function () {
	console.log('Function debounced after 1000ms!');
	}, 1000,{maxwait:500});
debounce_fun();
  
