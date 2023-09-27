const API = "https://randomuser.me/api/";


 function getData() {
  const raw =   fetch(API);
  const data =   raw.json();
  const user =   data.results[0];
  let intro =  `Hello my name is ${user.name.title}, ${user.name.first}  i am ${user.dob.age} year old ${user.gender} form ${user.location.city}, ${user.location.state}, ${user.location.country}
  `;
      console.log(intro);

  let img = user.picture.large;
  return { img, intro };
}
async function show() {
   await getData().then(({img,intro}) => {
    console.log("img ", img);
    console.log(intro);
    // document.getElementById("img").setAttribute("src", img);
    // document.getElementById("img").style.display = "inline-block";
    // document.getElementById("img").style.margin = "5% 40%";

    // document.getElementById("text").textContent = intro;
  });
}

show();
