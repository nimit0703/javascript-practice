const API = "https://randomuser.me/api/";

function show() {
  fetch(API)
    .then(function (responce) {
      // console.log(responce.json());
      return responce.json();
    })
    .then(function (data) {
      console.log(data.results[0]);
      return data.results[0];
    })
    .then(function (user) {
      let intro = `Hello my name is ${user.name.title}, ${user.name.first}  i am ${user.dob.age} year old ${user.gender} form ${user.location.city}, ${user.location.state}, ${user.location.country}
        `;
      let img = user.picture.large;
      console.log(intro);
      document.getElementById("img").setAttribute("src", img);
      document.getElementById("img").style.display = "inline-block";
      document.getElementById("img").style.margin = "5% 40%";
      document.getElementById("text").textContent = intro;
    });
}
