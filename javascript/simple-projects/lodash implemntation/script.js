//const
//objects
const fruites = {
  apple: { price: 52, amount: 61 },
  mango: { price: 120, amount: 73 },
  orange: { price: 20, amount: 3 },
  banana: { price: 12, amount: 352 },
};

const welcomeMsg = "";
//var
var amount = 0;
var totalBill = 0;
var shipping = 0;

setInterval(() => {
  var date = new Date();
  document.getElementById(
    "time"
  ).innerHTML = `<h1>${date.getHours()}: </h1><h2>${date.getMinutes()}: </h2><h3>${date.getSeconds()}</h3>`;
}, 1000);

//windos method
window.onload = () => {
  let str = _.split("Welcome ,To Fruit Shop", "");

  const interval = setInterval(() => {
    document.getElementById("welcome").innerHTML += str[0];
    str = _.slice(str, 1);

    if (!_.size(str)) {
      clearInterval(interval);
    }
  }, 600);

  /**this method will set defaults */
  setAmmountAndPrices();
};
//functions
function addFruitToCart(pices, price) {
  console.log("enter");
  var amount = pices * price;
  var shipping = amount >= 250 ? 0 : 99;
  var totalBill = amount + shipping;
  document.getElementById("amount").innerHTML = amount;
  document.getElementById("shipping").innerHTML = shipping;
  document.getElementById("total-bill").innerHTML = totalBill;

  /**Promise
   * that everything is added to cart Successfully
   * now you can continue
   */
  return new Promise((resolve) => {
    resolve("Everything is added to cart nicely");
  });
}

function addFruit(fruitName) {
  let fruit = _.get(fruites, fruitName, 1);
  let weHave = fruit.amount;
  console.log(weHave, fruit);
  let cusWant = Number(document.getElementById(`cust-${fruitName}-amount`).value);
  if (cusWant === 0) {
    document.getElementById(`${fruitName}-error`).classList.add("text-danger");
    _.delay(() => {
      document.getElementById(`${fruitName}-error`).classList.remove("text-danger");

    }, 1000);
  } else if (cusWant > weHave) {
    document.getElementById(
      `${fruitName}-error`
    ).innerHTML = `We have only ${weHave} Pc`;
    document.getElementById(`${fruitName}-error`).classList.add("text-danger");
  } else {
    if (confirm("Press a button!\nEither OK or Cancel.")) {
      let price = fruit.price;
      addFruitToCart(cusWant, price).then((msg)=>{
        let itemLeft = weHave - cusWant;
        console.log("before:",fruit,fruites);
        _.set(fruit,'amount',itemLeft);
        _.set(fruites,fruitName,fruit);
        console.log("After:",fruit,fruites);
        document.getElementById(`${fruitName}-amount`).innerHTML =fruit.amount;
        document.getElementById(`cust-${fruitName}-amount`).value = 0;
      });
    }
  }
}

//function
function setAmmountAndPrices() {
  //operations
  //events
  _.forEach(fruites, (fruit, name) => {
    // console.log(`${name}-price`, `${name}-amount`);
    document.getElementById(`${name}-price`).innerHTML = fruit.price;
    document.getElementById(`${name}-amount`).innerHTML = fruit.amount;
  });

  var amount = 0;
  var totalBill = 0;
  var shipping = 0;

  document.getElementById("amount").innerHTML = amount;
  document.getElementById("shipping").innerHTML = shipping;
  document.getElementById("total-bill").innerHTML = totalBill;
}
