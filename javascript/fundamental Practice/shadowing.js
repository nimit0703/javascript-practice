function shy() {
  var x = "original text";
  if (true) {
     var  x = "shadow text";
    console.log("insideMethod ", x);
  }
  console.log(x);
}
shy();

/*
     legal shadowing:                           // runs perfectly
        declared -->var ,shadow -->var 
        declared -->let ,shadow -->let 
        declared -->const ,shadow -->const 
        declared -->var ,shadow -->let 
        declared -->var ,shadow -->const
        declared -->let ,shadow -->const 
        declared -->const ,shadow -->let 

     Illegal Shadowing:                         // gives syntaxError
        declared -->let ,shadow -->var 
        declared -->const ,shadow -->var 

  */
