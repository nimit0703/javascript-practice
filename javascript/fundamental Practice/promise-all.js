// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("hello");
//     }, 3000);
// });
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("hello");
//     }, 4000);
// });
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject(new Error("error"));
//     }, 5000);
// });

// console.log(Promise.all([promise1,promise2,promise3]));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1_delayed_resolution"), 1000);
}).catch(function (error) {
  console.log("promise error catched");
});

const p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_immediate_rejection"));
});

Promise.allSettled([p1,p2]).then(
  (values) => {
    values.forEach(element => {
        console.log(element.status,' :',element.value?element.value:element.reason)
    }); 
  }
);
