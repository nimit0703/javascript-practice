/**
 * FlatMap
 * flatMapDeep
 * flatMapDepth
 */


var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': true }
  ];

// console.log(_.every(users,'active'));
// console.log(_.filter(users,['user','barney']));


// console.log(_.flatMap([1,2]));

_.forEach([1, 2], function(value) {
    // console.log(value);
  });
  
  _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
    // console.log(key,": ",value+2);
  });

//   console.log(_.groupBy(['one', 'two', 'thr'],'length'))

// console.log(_.includes('abcd', 'bc',1)); //true

// console.log(_.invokeMap(['abc','Efg'],String.prototype.toUpperCase))

var array = [
    { 'dir': 'left', 'code': 89 },
    { 'dir': 'right', 'code': 71 }
  ];

// console.log(_.keyBy(array,'code'))
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];
   
  // Sort by `user` in ascending order and by `age` in descending order.
//   var users = _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
//   console.log(users);

// console.log(_.partition(users,['age',36]))

// console.log(_.shuffle(users));

// console.log(_.now());
// _.defer(function(stamp) {
//     console.log(_.now() - stamp);
//   }, _.now());