var a = +prompt("Enter subject marks:");
var b = +prompt("Enter subject marks:");
var c = +prompt("Enter subject marks:");
var d = +prompt("Enter subject marks:");
var e = +prompt("Enter subject marks:");
var total= (a+b+c+d+e);
var per = total*100/500;
if(per>=50){
    alert("Pass");
    document.write("Pass");
    console.log("Pass");
}
else{
    alert("Fail");
    document.write("Fail");
    console.log("Fail");
}