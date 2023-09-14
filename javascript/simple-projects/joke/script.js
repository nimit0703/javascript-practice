const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '61641f4642mshf1a3f4928049c87p1d3c64jsnc4fb4a400bf5',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

call();
function call(){
    fetch(url,options)
    .then((respone)=>{
        return respone.json();
    }).then((data)=>{
        console.log(data.body[0].setup );
        console.log(data.body[0].punchline);
    })
}