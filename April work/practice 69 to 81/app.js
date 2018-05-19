// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10
// };
// plan1.discountMonths = [6, 7, 11];
// document.write(JSON.stringify(plan1));
// console.log('name' in plan1);
// function calcAnnual() {
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < plan1.discountMonths.length; i++) {
//         if (plan1.discountMonths[i] === thisMo) {
//             bestPrice = plan1.price * .8;
//             break;
//         }
//     }
//     return bestPrice * 12;
// }
// document.write(calcAnnual());
// function Plan(name, price, space, transfer, pages) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
// }
// var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
// document.write(JSON.stringify(plan1));
// Plan.prototype.calcAnnual = function (percentIfDisc) {
//     var bestPrice = this.price;
//     var currDate = new Date();
//     var thisMo = currDate.getMonth();
//     for (var i = 0; i < this.discountMonths.length; i++) {
//         if (this.discountMonths[i] === thisMo) {
//             bestPrice = this.price * percentIfDisc;
//             break;
//         }
//     }
//     return bestPrice * 12;
// };
// var listOfProperties = [];
// for (var prop in plan1) {
//     listOfProperties.push(prop);
// }
// document.write(listOfProperties);
// var listOfProperties = [];
// for (var prop in plan1) {
//     if (plan1.hasOwnProperty(prop)) {
//         listOfProperties.push(prop);
//     }
// }
// document.write(listOfProperties);
// document.write(plan1.hasOwnProperty('calcAnnual'));
// var whereWeAt = window.location.href;
// document.write(whereWeAt);
// var theDomain = window.location.hostname;
// alert(theDomain);
// var thePath = window.location.pathname;
// document.write(thePath);
// var theAnchor = window.location.hash;
// document.write(theAnchor);
// window.location.href = "http://www.me.com/1.html";
// location = 'http://www.facebook.com';
// window.location.replace("http://www.facebook.com");
// window.location.reload(true);
// window.location.reload(false);
// window.location.reload();
// window.location.assign("http://www.me.com");
// history.back();
// history.forward();
// history.go(-3);
// history.go(2);
// var whereUserCameFrom = document.referrer;
// alert(whereUserCameFrom);
// var monkeyWindow = window.open();
// var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars < br > named the Order of Friars Minor Capuchin who wear < br > brown robes with large hoods covering their heads.</p > ";
// monkeyWindow.document.write(windowContent);
// monkeyWindow.location.assign("http://www.animals.com/capuchin.html");
// var monkeyWindow = window.open("monk.html", "win1");
function checkForPopBlocker() {
    var testPop = window.open("", "", "width=100,height=100");
    if (testPop === null) {
        alert("Please disable your popup blocker.");
    }
    testPop.close();
}
checkForPopBlocker();