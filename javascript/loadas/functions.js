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
var bound_fun =
_.bindKey(obj, 'welcome', 'Hello');

// Calling bound_fun by passing its value
// console.log(bound_fun('!!'));
