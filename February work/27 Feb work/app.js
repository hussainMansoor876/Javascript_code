// function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      alert("Current time: "+ theHr + ":" + theMin);
//  }
//  tellTime();
// function greetUser() {
//      alert("Hello World.");
//      }
// greetUser();
// function Hello(arg){
//     alert(arg);
// }
// // Hello("Hello World");
// var world = "Hello Wolrd...!";
// Hello(world);
// function per(obt,total){
//     var percentage = obt*100/total;
//     return percentage;
// }
// var obt = +prompt("Enter your obtained marks out of 50 marks :");
// var total = 50;
// var percentage = per(otb,total);
// alert(percentage);
function nested(fun){
    if(fun == "a"){
        a(fun);
    }
    else if(fun == "b"){
        // function b(fun);
    }
    else if(fun == "c"){
        // function c(fun);
    }
    else if(fun == "d"){
        // function d(fun);
    }
    else{
        alert("No function match");
    }
}
function a(a){
    alert("Hello My name is "+a);
}
function b(b){
    alert("Hello My name is "+b);
}
var num = prompt("Enter function name :");
nested(num);