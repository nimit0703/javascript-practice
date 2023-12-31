/*
// differenceWith // pending
// intersectionWith //pending
// pullAllWith
// unionWith
*/

// chunk
// chunk creates chuncks of small array from  given array
// string is considered as array of character
var arr = _.chunk("array",2); // returns an object
var arr2 = _.chunk(arr)
// console.log(arr2);

// compact
// remove all falsey values from array
var a; //undefine
var arr = _.compact([0,1,3,4,'',null,5,false,a,6]); // returns an object
// console.log(arr);

//concat
// add all arrays into single array
var arr=[1];
var arr2 = _.concat(arr,2,[3,5,6],[[4,7]]); //return's obj
// console.log(arr2); // [1, 2, 3, Array(1)]

//differnce
var arr = [1,2,3,4,5,6,7,8,9,10];
var arr2 = [2,4,6,8,10];
var diff = _.difference(arr,arr2);
// console.log(diff); //in arr but Not in arr2
// console.log(typeof(diff)); //object


//differenceBy

var arr = [{x:1},{x:2},{x:3},{x:4},{x:5}];
var arr2 = [{x:4},{x:5}];
var diff = _.difference(arr,arr2); //it will not work
// console.log(diff); // gives all values of arr

var diffBy = _.differenceBy(arr,arr2,"x"); //it will work in diffBy we take differnce by iterating values by x;
// console.log(diffBy); // gives first 3 values



// drop
// drop n elements from beginning
var arr = [{x:1},{x:2},{x:3},{x:4},{x:5}];
var newArr = _.drop("arr",2);
// console.log(newArr);

// drop right
// works same as drop but removes elements from right side


//dropRightWhile
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false },
    { 'user': 'bob', 'active': false }
  ];

var arr  = _.dropRightWhile(users,['active', false]) // drop elements while condition is satisfied
// console.log(arr);

// dropWhile
// similar as dropRightWile just drop elements from left side 

var arr= [1,2,3,4,5,6,7];
_.fill(arr,'*',3,5);
// console.log(arr);

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

// findIndex
// console.log(_.findIndex(users,['active',false])) // 0

//findLastIndex
// console.log(_.findLastIndex(users,['active',false])) // 1

// head
// console.log(_.head(users))


// flatten
// Flattens array a single level deep.
var arr = [1, 2, [3, 4,[ 5, 6,['abc'], 7], 8], 9];
// console.log(_.flatten(arr)); // [ 1,2,3,4,[5,6,['abc'],7],8,9]

// flattenDeep
// Recursively flattens array.
// console.log(_.flattenDeep(arr)); // [ 1,2,3,4,5,'abc'6,7,8,9]

// flattenDepth
// Recursively flatten array up to depth times
// console.log(_.flattenDepth(arr,2)); // [1, 2, 3, 4, 5, 6, ['abc'], 7, 8, 9]

// fromPairs
// returns an object composed from key-value pairs.

var arr = [['a',1,'d'],['b',2,'dd'],['c',3,'dd']]
var fp = _.fromPairs(arr);
// console.log(fp);
// console.log(typeof(fp));

//indexof
var arr = [1,2,3,4,5];
// console.log(_.indexOf(arr,3,4)) //-1


//intersection
var a =['a','b']
var b =['c','b']
// console.log(_.intersection(a,b)) // ['b]

// join 
// console.log(_.join(['a', 'b', 'c'], '~')) // a~b~c
// console.log(_.join("abcd", '~')) // a~b~c~d

// pull
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log(_.pull(array,'a')) //removes all 'a
// console.log(_.pull("gaga",'a')) //error


// pullAt
var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]);

// console.log(array);
// => ['a', 'c']

// console.log(pulled);
// => ['b', 'd']

//remove 
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

// console.log(array);
// => [1, 3]
 
// console.log(evens);
// => [2, 4]6

// sortedIndexOf
// console.log(_.sortedIndexOf([4, 5, 5, 5, 6],6));

var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
// console.log(zipped)

// console.log(_.unzip(zipped));
// => [['a', 'b'], [1, 2], [true, false]]

var arr = [['a',1,'d'],['b',2,'dd'],['c',3,'dd']]
var fp = _.fromPairs(arr);
// console.log(fp);
// console.log(_.zipObject(arr,arr2));

// console.log(_.zipObjectDeep(['a.b.c.e', 'a.b.d'], [1, 2]));