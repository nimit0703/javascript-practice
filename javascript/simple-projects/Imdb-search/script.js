async function showResults() {
  let movieName = document.getElementById("user-input").value;
//   console.log(movieName);
debugger
  if (movieName) {
    getData(movieName).then((allData) => {
      let movies = allData.filter((q)=>q.qid ==='movie').map((e)=>e.l);
      let celeb = allData.filter((q)=>(q.s.startsWith('Director')||q.s.startsWith('Actor'))).map((e)=>e.l+" :  "+e.s.replaceAll(',',' \| '));
    console.log(celeb);
    document.getElementById("movie-feed").innerHTML = movies.toString().replaceAll('\,','<br>');
    document.getElementById("celeb-feed").innerHTML = celeb.toString().replaceAll('\,','<br><br>');

    });
  }
}

function getData(movieName) {
  var API = `https://imdb8.p.rapidapi.com/auto-complete?q=${movieName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "61641f4642mshf1a3f4928049c87p1d3c64jsnc4fb4a400bf5",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };
  return fetch(API, options)
    .then((responece) => {
      return responece.json();
    })
    .then((responceData) => {
      console.log(responceData.d);
      return new Promise((resolve) => {
        resolve(responceData.d);
      });
    });
}
