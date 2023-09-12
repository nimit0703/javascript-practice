function x(){

    for(var i=0;i<5;i++){
        
        setTimeout(() => {
            console.log("x :",i);
        }, i*1000);
        
    }
}
function y(){

    for(let i=0;i<5;i++){
        
        setTimeout(() => {
            console.log("y :",i);
        }, i*1000);
        
    }
}

x(); // this will not work properly bcz  all callback send to queue refer to same i bcz of var property  
y(); // this will work properly bcz  all callback send to queue refer to different i bcz of let property:block scope