const API = "https://randomuser.me/api/";
let request = new XMLHttpRequest();
request.open("GET",API);
request.send();
request.onload = ()=>{
    console.log(request);
    if(request.status===200){
        console.log(JSON.parse(request.response));
    }
}