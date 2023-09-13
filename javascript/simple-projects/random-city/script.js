const API = "https://restcountries.com/v3.1/all";

let allContryData;
var canPlay = false;
var leftSelected = false;
var rightSelected = false;
let leftContryData;
let rightContryData;

function showResult() {
  console.log(leftContryData.population);
  let leftContryPopulation = leftContryData.population;
  let rightContryPopulation = rightContryData.population;

  document.getElementById("left-contry-population").textContent =
    leftContryPopulation.toLocaleString();
  document.getElementById("right-contry-population").textContent =
    rightContryPopulation.toLocaleString();
  document.getElementById("left-contry-population").style.display = "block";
  document.getElementById("right-contry-population").style.display = "block";

  if (leftContryPopulation > rightContryPopulation) {
    console.log("left ", leftContryPopulation > rightContryPopulation);
    if (window.leftSelected) {
      document.getElementById("left").style.backgroundColor = "green";
    } else {
      document.getElementById("right").style.backgroundColor = "red";
    }
    console.log(leftContryData.name.common, " is winner Left");
    console.log(
      "use selected",
      window.leftSelected
        ? leftContryData.name.common
        : rightContryData.name.common
    );
  } else {
    if (window.rightSelected) {
      document.getElementById("right").style.backgroundColor = "green";
    } else {
      document.getElementById("left").style.backgroundColor = "red";
    }
    console.log(rightContryData.name.common, " is winner Right");
    console.log(
      "use selected",
      window.leftSelected
        ? leftContryData.name.common
        : rightContryData.name.common
    );
  }
}
function leftClick() {
  if (window.canPlay) {
    window.canPlay = false;

    window.leftSelected = true;
    window.rightSelected = false;
    setTimeout(() => {
      showResult();
    }, 1000);
    document.getElementById("left").style.backgroundColor = "yellow";
  }
}
function rightClick() {
  if (window.canPlay) {
    window.canPlay = false;

    window.leftSelected = false;
    window.rightSelected = true;
    setTimeout(() => {
      showResult();
    }, 1000);
    document.getElementById("right").style.backgroundColor = "yellow";
  }
}
function showNewContry() {
  leftContryData = allContryData[getRandomNumber()];
  rightContryData = allContryData[getRandomNumber()];
  if (leftContryData !== rightContryData) {
    document.getElementById("left").style.backgroundColor = "white";
    document.getElementById("right").style.backgroundColor = "white";
    document.getElementById("left-contry-population").style.display = "none";
    document.getElementById("right-contry-population").style.display = "none";
    document.getElementById("right-contry").textContent =
      rightContryData.name.common;
    document.getElementById("left-contry").textContent =
      leftContryData.name.common;
    canPlay = true;
    leftSelected = false;
    rightSelected = false;
  }

  //   console.log(contry1.name.common, contry2);
}

function getRandomNumber() {
  return Math.floor(Math.random() * (249 - 0 + 1)) + 0;
}

window.onload = () => {
  fetch(API)
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      //   console.log(data);
      allContryData = data;
    });
};
