/**
 * create()
 * functions
 * functionsIn
 * bindsall//
 * cond
 * iteratee
*/
var objects = [1,2];
 
var shallow = _.clone(objects);
var deep = _.cloneDeep(objects);
shallow[0]=5
deep[0]=0
objects[0]='ss'

// console.log(shallow,objects,deep);
// console.log(deep === objects);
// // => true

var objects = [
    { 'a': 2, 'b': 1 },
    { 'a': 1, 'b': 2 }
  ];
   
//   console.log(_.conforms({ 'b': function(n) { return n > 1; } }));

// console.log( _.constant({ 'a': 1 })())

// console.log(_.defaultTo([1,2,4,1,undefined],10))

function square(n) {
    return n * n;
  }
   
  var addSquare = _.flow([_.add, square]);
  var addSquareRight = _.flowRight([ square,_.add]);
//   console.log(addSquare(1, 2));
//   console.log(addSquareRight(1,3));

function a(){
        return "hello";
}
function b(str){
    console.log(str);
}

var exe = _.flow(a,b);
// exe();

var object = { 'a': 1,'b':2 };
 
// console.log(_.identity(object));
// console.log(_.filter(object,_.iteratee(1)));

var objects = [
    { 'a': 1, 'b': 2, 'c': 3 },
    { 'a': 4, 'b': 5, 'c': 6 },
    { 'a': 4, 'b': 5, 'c': 6 },
    { 'a': 4, 'b': 4, 'c': 55 },
    { 'a': 4, 'b': 5, 'c': 5 },
  ];
   

console.log(_.filter(objects, _.matches({ 'a': 4 })));