console.log("before promise")   //1
let pr = new Promise(function (resolve,reject){
    setTimeout(() => {
        console.log("inside promise") //3
        resolve("resolved")
    }, 5000);
})
pr.then(function(){
    console.log("promise the part") //3
})
console.log("after Promise"); //2
