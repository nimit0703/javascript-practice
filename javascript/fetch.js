const API = 'https://random.dog/woof.json'


function useApi(){
    fetch(API)
    .then((responce)=>{
        return responce.json();
    }).then((data)=>{
        console.log(data);
    })
}

useApi()
