// var a =new Date();
// alert(a);
// var b = a.getHours();
// alert(b);
// var today = new Date();
// var dOfBirth = +prompt("Enter your birth year");
// var age = today.getFullYear()-dOfBirth;
// age = Math.floor(age);
// alert("Your age is  : "+age+" years");
// var birthOfDate = +prompt("Enter your birth date :");
// var birthOfMonth = +prompt("Enter your birth month :","eg 1,2,3 etc");
// var birthOfYear = +prompt("Enter your birth year :");
// var today = new Date();
// var tmonth = today.getMonth();
// var tday = today.getDay();
var birth = new Date(prompt("Enter your birth date :", "eg june 2, 1997"));
alert(birth);
birth = birth.getTime();
var today = new Date().getTime();
var age1 = (today - birth) / (1000 * 60 * 60 * 24 * 365.25);
var age = Math.floor((today - birth) / (1000 * 60 * 60 * 24 * 365.25));
var month1 = (age1 % age) * 12;
var month = Math.floor(month1);
var day1 = (month1 % month) * 30.4375;
var day = Math.floor(day1);
if (age1 <= 0) {
    var month1 = age1 * 12;
    var month = Math.floor(month1);
    if (month1 <= 0) {
        var day1 = month1 * 30.4375;
        var day = Math.floor(day1);
    }
    else {
        var day1 = (month1 % month) * 30.4375;
        var day = Math.floor(day1);
    }
}
else if (month1 <= 0) {
    var day1 = month1 * 30.4375;
    var day = Math.floor(day1);
    // if (day1 <= 0) {
    //     var day1 = month1 * 30.4375;
    //     var day = Math.floor(day1);
    //     break;
    // }
}
// else if(day1 <= 0){

// }
// var hour1 = (day1%day)*24;
// var hour = Math.floor(hour1);
document.write("<h1>" + age + " years " + month + " months and " + day + " days</h1>");
