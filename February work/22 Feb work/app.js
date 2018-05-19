// var a = Math.random()*6+1;
// document.write("Random: "+a+"<br>");
// var b = Math.ceil(a);
// document.write("Ceil: "+b+"<br>");
// var c = Math.floor(a);
// document.write("Floor: "+c+"<br>");
// var d = Math.round(a);
// document.write("Round: "+d);
// var p = +prompt("Enter number Here:");
// if(p<0){
//     p = p * -1;
//     document.write(p);
// }
// else{
//     document.write(p);
// }
// var x = "13";
// document.write(typeof(x)+"<br>");
// var y = parseInt(x);
// document.write(typeof(y)+"<br>");
// document.write(y);
// var z =y.toString();
// document.write(z);
var userInput = prompt("Enter your choice","Head or Tails")
var a = Math.random()*2;
document.write("Random: "+a+"<br>");
var toss = Math.round(a);
var tossResult;
if(toss===1){
    tossResult = "Head";
}
else{
    tossResult = "Tails"
}
if(tossResult == userInput){
    document.write("Your won The toss");
}
else{
    document.write("You Loss the Toss");
}