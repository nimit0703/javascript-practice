cart = ["pen", "paper", "ink"];
// createOrder will return an promise object with orderId in it
createOrder(cart)
  .then((orderId) => {
    console.log("promise is resolved :", orderId);
  })
  .catch((err) => {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //validate cart with some logic
    if (!validateCart(cart)) {
      //cart is not validated
      reject(new Error("Cart Unvalid"));
    }
    const orderId = "723"; // get orderid somhow using api call
    if (orderId) {
      setTimeout(() => {
        resolve(orderId); //promise resolve and had return with orderId
      }, 5000);
    }
  });

  return pr;
}
function validateCart(cart) {
  return false;
}
