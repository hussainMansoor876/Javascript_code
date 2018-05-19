// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// alert(cityToCheck);
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }
// alert(cityToCheck.toUpperCase());
// var capital = cityToCheck[0];
// var small = cityToCheck.slice(1);
// var fullName = capital.toUpperCase() + small.toLowerCase();
// alert(fullName);
// var woldWar = "The New Yorker magazine doesn't allow the phrase 'World War II' Hello my name is Mansoor Hussain";
// for (var i = 0; i < woldWar.length; i++) {
//     if (woldWar.slice(i, i + 12) === "World War II") {
//         woldWar = woldWar.slice(0, i) + "the Second World War" + woldWar.slice(i + 12);
//     }
// }
// document.write(woldWar);
// var firstChar = woldWar.indexOf("World War II");
// alert(firstChar);
// if (firstChar !== -1) {
//     woldWar = woldWar.slice(0, firstChar) + "the Second World War" + woldWar.slice(firstChar + 12);
// }
// document.write(woldWar);
// var firstName = "mansoor";
// var firstChar = firstName.slice(0,1);
// alert(firstChar);
// var name = "My name is mansoor my name is mansoor";
// name = name.replace("mansoor","hussain");
// name = name.replace(/mansoor/g,"hussain");
// alert(name);
// var num = Math.round(+prompt("Enter decimal number"));
// alert(num);
// num = Math.ceil(+prompt("Enter decimal number"));
// alert(num);
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// alert(numberOfStars);
// var myInteger = parseInt("1.9999");
// alert(myInteger);
// var float = parseFloat("1.999");
// alert(float);
// var total = 9.87584446;
// var prettyTotal = total.toFixed(2);
// alert(prettyTotal);
// var rightNow = new Date();
// alert(rightNow.getDay());
// alert(rightNow.getDate());
// alert(rightNow.getFullYear());
// alert(rightNow.getHours());
// alert(rightNow.getMilliseconds());
// alert(rightNow.getMinutes());
// alert(rightNow.getMonth());
// alert(rightNow.getSeconds());
// alert(rightNow.getTime());
// alert(rightNow);
// var birthDay = new Date("11 march 2018 9:40:47 am");
// alert(birthDay);
// var year = new Date().setFullYear("1970");
// alert(year/(1000*60*60*24));
var dayOfWk = prompt("Enter day of week");
switch (dayOfWk) {
    case "Sat":
        alert("Whoopee");
        break
    case "Sat":
        alert("Whoopee 2");
        break;
    case "Fri":
        alert("TGIF!");
        break;
    default:
        alert("Shoot me now!");
}
