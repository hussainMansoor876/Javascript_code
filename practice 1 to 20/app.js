// var num = "25";
// alert(num/5);
// alert("2 plus 2 equals " + 2 + 2);
// var spec = prompt("Your species?", "human");
// var r = "rose";
// var r1 = "Rose"
// if(r1 === r){
//     alert("Hello");
// }
// else{
//     alert("Bye");
// }
// window.alert("Hello");
// var message = "Thanks, ";
// var userName = "Susan";
// var banger = "!";
// var customMess = message + userName + banger;
// alert(customMess);
// var numberOfCats = prompt("How many cats?","8");
// var tooManyCats = +numberOfCats + 1;
// alert(tooManyCats);
var pets = [];
pets[0] = "dog";
pets[1] = "Cat";
pets[2] = "horse";
pets[3] = "cow";
pets.splice(2,0, "pig", "duck", "emu");
console.log(pets);
document.write(pets+"<br>");
document.write(pets.splice(2, 2)+"<br>");
// var noPets = pets.slice(2, 4);
// document.write(noPets);