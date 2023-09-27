window.onload = function(){
    document.getElementById('loginForm').style.display ='none';
}

function loginClick(){
    document.getElementById('loginForm').style.display= 'block';
    document.getElementById('signinForm').style.display= 'none';
    document.getElementById('form-title').innerText= 'Login';
    
    
}
function signinClick(){
    document.getElementById('form-title').innerText= 'Sign In';
    document.getElementById('signinForm').style.display= 'block';
    document.getElementById('loginForm').style.display= 'none';
}


const users = [];

class User{
    constructor(name, number, email, hPassword){
        this.name = name;
        this.number = number;
        this.email = email;
        this.hPassword = hPassword;
    }
}

const signinForm = document.getElementById('signinForm'); 
console.log(signinForm);

signinForm.addEventListener("submit",function(){
    console.log("signinClick");
})