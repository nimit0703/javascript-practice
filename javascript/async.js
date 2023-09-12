const API = "https://randomuser.me/api/";


async function getData() {
  const raw = await fetch(API);
  const data = await raw.json();
  const user = await data.results[0];
  let intro = `Hello my name is ${user.name.title}, ${user.name.first}  i am ${user.dob.age} year old ${user.gender} form ${user.location.city}, ${user.location.state}, ${user.location.country}
  `;
  let img = user.picture.large;
  return { img, intro };
}
function show() {
  getData().then(({img,intro}) => {
    // console.log("img ", img);
    // console.log(intro);
    document.getElementById("img").setAttribute("src", img);
    document.getElementById("img").style.display = "inline-block";
    document.getElementById("img").style.margin = "5% 40%";

    document.getElementById("text").textContent = intro;
  });
}
