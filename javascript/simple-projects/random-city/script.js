const API = "https://restcountries.com/v3.1/all";

let allContryData;
let canPlay = false;
let leftSelected = false;
let rightSelected = false;
let leftContryData;
let rightContryData;

function showResult() {
  console.log(leftContryData.population);
  let leftContryPopulation = leftContryData.population;
  let rightContryPopulation = rightContryData.population;

  document.getElementById("left-contry-population").textContent =
    leftContryPopulation;
  document.getElementById("right-contry-population").textContent =
    rightContryPopulation;
  document.getElementById("left-contry-population").style.display = "block";
  document.getElementById("right-contry-population").style.display = "block";

  if (leftContryPopulation > rightContryData) {
    console.log(leftContryData.name.common, " is winner");
  } else {
    console.log(rightContryData.name.common, " is winner");
  }
}
function leftClick() {
  if (canPlay) {
    leftSelected = true;
    rightSelected = false;
    setTimeout(() => {
      showResult();
    }, 5000);
  }
  document.getElementById("left").style.backgroundColor = "yellow";
}
function rightClick() {
  if (canPlay) {
    leftSelected = false;
    rightSelected = true;
    setTimeout(() => {
        showResult();
      }, 5000);
  }
  document.getElementById("right").style.backgroundColor = "yellow";
}
function showNewContry() {
  leftContryData = allContryData[getRandomNumber()];
  rightContryData = allContryData[getRandomNumber()];
  if (leftContryData !== rightContryData) {
    document.getElementById("left").style.backgroundColor = "white";
    document.getElementById("right").style.backgroundColor = "white";
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
      console.log(data);
      allContryData = data;
    });
};
