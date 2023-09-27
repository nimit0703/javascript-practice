cart = ["pen", "paper", "ink"];

createOrder(cart)
  .then((orderId) => {
    console.log("promise is resolved :", orderId);
    return orderId;
  })
  .then((orderId)=>{
    return proceedToPayment(orderId);
  })
  .then((msg)=>{
    console.log(msg);
  })
  .catch((err) => {
    console.log(err.message);
  });

/*

if a 'then' is after a 'catch' then this 'then' will be exectued always because 
'catch' has already captured and handdle all errors above it
*/
function proceedToPayment(orderId){
    return new Promise(function (resolve,reject){
        resolve(`payment was successfull ${orderId}`);
    })
}
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("Cart Unvalid"));
    }
    const orderId = "723"; 
    if (orderId) {
      setTimeout(() => {
        resolve(orderId); 
      }, 5000);
    }
  });

}
function validateCart(cart) {
  return true;
}
