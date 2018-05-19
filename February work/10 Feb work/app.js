var a = ["Mansoor","Hussain",1,true];
a.pop();
a.push("Sufiyan","Zayan");
a.shift();
a.unshift("Mansoor");
a.splice(2,0,"Ayan");
var b = a.slice(2,4);
console.log(b);
console.log(a);