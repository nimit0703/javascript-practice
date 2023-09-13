const API = "https://randomuser.me/api/";

function show() {
  const user1Data = getData(); // return promise
  const user2Data = getData(); //
  const user3Data = getData(); //
  //   console.log(user1Data,user2Data,user3Data);
  const usersData = [user1Data, user2Data, user3Data];
  Promise.all(usersData).then((users) => {
    console.log("all three user's data is fatched", users);
    showUserOnUI(users).then(() => {
      console.log("all three users are shown on UI, congrats");
    });
  });
}

function showUserOnUI(users) {
  function getIntro(user) {
    return `Hello my name is ${user.name.title}, ${user.name.first}  i am ${user.dob.age} year old ${user.gender} form ${user.location.city}, ${user.location.state}, ${user.location.country}
        `;
  }
  function getImg(user) {
    return user.picture.large;
  }
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 3; i++) {
      const imgId = `img${i}`;
      const textId = `text${i}`;
      const intro = getIntro(users[i]);
      const img = getImg(users[i]);
      console.log(imgId, img, textId, intro);
      document.getElementById(imgId).setAttribute("src", img);
      document.getElementById(imgId).style.display = "inline-block";
      document.getElementById(imgId).style.margin = "5% 40%";
      document.getElementById(textId).textContent = intro;
    }
  });
}

function getData() {
  return fetch(API)
    .then((responce) => {
      return responce.json();
    })
    .then(function (data) {
      console.log(data.results[0]);
      return new Promise((resolve, reject) => {
        resolve(data.results[0]);
      });
    });
}
