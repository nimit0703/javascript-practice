const API = "https://restcountries.com/v3.1/all";

let allContryData;
let canPlay = false;
let leftSelected = false;
let rightSelected = false;
let leftContryData;
let rightContryData;

onload = () => {
  fetch(API)
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      allContryData = data;
      console.log(allContryData[3]);
    });
};

function showNewContry() {
  debugger
  leftContryData = allContryData[getRandomNumber()];
  rightContryData = allContryData[getRandomNumber()];
  if (leftContryData !== rightContryData) {
    // changing styles everytime when click on next;
    console.log(leftContryData.flags.png);
    document.getElementById("left").style.background = `url(${leftContryData.flags.png}) no-repeat`;
    document.getElementById("left").style.backgroundSize = `100% 100%`;
    document.getElementById("left").style.opacity="0.7";
    document.getElementById("right").style.background = `url(${rightContryData.flags.png}) no-repeat`;
    document.getElementById("right").style.backgroundSize = `100% 100%`;
    document.getElementById("right").style.opacity="0.7";
    document.getElementById("left").style.border = "none";
    document.getElementById("right").style.border = "none";
    document.getElementById("left-contry-population").style.display = "none";
    document.getElementById("right-contry-population").style.display = "none";
    document.getElementById("right-contry").textContent =
      rightContryData.name.common;
    document.getElementById("left-contry").textContent =
      leftContryData.name.common;
    /*
    setting flags according to usecase for avoiding conflicts 
    like if we had clicked right then can not change the selected item
    */
    canPlay = true;
    leftSelected = false;
    rightSelected = false;
  }
}

function showResult() {
  // debugger
  let leftContryPopulation = leftContryData.population;
  let rightContryPopulation = rightContryData.population;

  document.getElementById("left-contry-population").textContent =
    leftContryPopulation.toLocaleString();
  document.getElementById("left-contry-population").style.display = "block";

  document.getElementById("right-contry-population").textContent =
    rightContryPopulation.toLocaleString();
  document.getElementById("right-contry-population").style.display = "block";

  if (leftContryPopulation > rightContryPopulation) {
    if (leftSelected) {
      // if we had selected left and answer is also left
      document.getElementById("left").style.border =
        "20px solid Green";
    } else {
      // if we had selected Right and answer is left
      document.getElementById("right").style.border =
        "20px solid red";
    }
    console.log(
      "use selected",
      leftSelected ? leftContryData.name.common : rightContryData.name.common
    );
  } else {
    if (rightSelected) {
      // if we had selected Right and answer is also right
      document.getElementById("right").style.border =
        "20px solid Green";
    } else {
      // if we had selected left and answer is right
      document.getElementById("left").style.border =
        "20px solid red";
    }
    console.log(
      "use selected",
      leftSelected ? leftContryData.name.common : rightContryData.name.common
    );
  }


}
function leftClick() {
  if (canPlay) {
    /*
    after clicking one side we can not make changes so 
    disabling required flags
    */
    canPlay = false;
    leftSelected = true;
    rightSelected = false;
    /*
    showing result after 3 sec
    */
    setTimeout(() => {
      showResult();
    }, 2000);
    document.getElementById("left").style.border = "20px solid #475560a6";
  }
}
function rightClick() {
  if (canPlay) {
    /*
    after clicking one side we can not make changes so 
    disabling required flags
    */
    canPlay = false;
    leftSelected = false;
    rightSelected = true;
    /*
    showing result after 3 sec
    */
    setTimeout(() => {
      showResult();
    }, 2000);
    document.getElementById("right").style.border = "20px solid #475560a6";
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * (249 - 0 + 1)) + 0;
}
