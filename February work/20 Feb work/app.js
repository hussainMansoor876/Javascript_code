// var name1 = "mansoor";
// console.log(name1.toLowerCase());
// console.log(name1.slice(0,3));
// var name2 = name1.slice(0,1).toUpperCase();
// var name3 = name1.slice(1);
// var name4 = name2+name3;
// console.log(name4)
// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === " ") {
//     alert("No double spaces allow!");
//     break;
//     }
// }
var text1 = "My name is Mansoor Hussain";
// for (var i = 0; i < text1.length; i++) {
//     if (text1.slice(i, i + 7) === "Mansoor") {
//     text1 = text1.slice(i, i+7)  + text1.slice(i + 7);
//     }
// }
// document.write("<h1>"+text1+"</h1><br>");
// var text2 = text1.indexOf("Mansoor");
// if(text2 !== -1){
//     text1 = text1.slice(0,text2)+"Nawab"+text1.slice(text2+7);
//     document.write("<h1>"+text1+"</h1>");
// }
var text2 = text1.replace("Mansoor","Nawab");
document.write("<h1>"+text2+"</h1>");