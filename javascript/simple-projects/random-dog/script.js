const API = "https://random.dog/woof.json";

function useDogApi() {
  fetch(API)
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      console.log(data);
      img = data.url;
      if (img.endsWith("mp4")) {
        document.getElementById("video").setAttribute("src", img);
        document.getElementById("video").style.display = "inline-block";
        // document.getElementById("video").style.margin = "5% 40%";
      } else {
        document.getElementById("img").setAttribute("src", img);
        document.getElementById("img").style.display = "inline-block";
        // document.getElementById("img").style.margin = "5% 40%";
      }
    });
}

window.onload = useDogApi();
