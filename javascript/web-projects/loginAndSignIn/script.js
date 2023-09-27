window.onload = function(){
    document.getElementById('signinForm').style.display ='none';
}

function loginClick(){
    document.getElementById('loginForm').style.display= 'block';
    document.getElementById('signinForm').style.display= 'none';
    document.getElementById('form-title').innerText= 'Login';
    
    
}
function signinClick(){
    document.getElementById('form-title').innerText= 'SignIn';
    document.getElementById('signinForm').style.display= 'block';
    document.getElementById('loginForm').style.display= 'none';
}