const API = "https://randomuser.me/api/";

const defaultuser = {
  name: { title: "james", first: "carl" },
  dob: { age: 0 },
  gender: "",
  location: { city: "aaa", state: "bbb", contry: "ccc" },
  picture: { large: "https://www.w3schools.com/howto/img_avatar.png" },
};

function show() {
  const user1Data = getData(); // return promise
  const user2Data = getData(); //
  const user3Data = getData(); //
  //   console.log(user1Data,user2Data,user3Data);
  const usersData = [user1Data, user2Data, user3Data];

  Promise.allSettled(usersData).then((users) => {
    const filteredUser = users
      .filter((e) => e.value !== undefined)
      .map((e) => e.value);
    while (filteredUser.length !== 3) {
      filteredUser.push(defaultuser);
    }
    console.log(filteredUser);
    showUserOnUI(filteredUser);
  });

  //   Promise.all(usersData).then((users) => {
  //     console.log("all three user's data is fatched", users);
  //     showUserOnUI(users).then(() => {
  //       console.log("all three users are shown on UI, congrats");
  //     });
  //   });
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
    for (let i = 0; i < users.length; i++) {
      const imgId = `img${i}`;
      const textId = `text${i}`;
      const intro = getIntro(users[i]);
      const img = getImg(users[i]);
      console.log(imgId, img, textId, intro);
      document.getElementById(imgId).setAttribute("src", img);
      document.getElementById(imgId).style.display = "inline-block";
      document.getElementById(imgId).style.margin = "5% 40%";
      document.getElementById(textId).textContent = intro;
      resolve();
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
        // custom cases reject if isFemale
        if (data.results[0].gender === "male") {
          resolve(data.results[0]);
        }
        // else{
        //     resolve( getData());
        // }
        reject(new Error("female"));
      });
    });
}
