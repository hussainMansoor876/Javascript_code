function f1() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
var myTime = setInterval(f1,1000);

function obj() {
    var object = {
        name: document.getElementById("name").value,
        fName: document.getElementById("fName").value,
        education: document.getElementById("education").value,
        class: document.getElementById("class").value
    }
    alert("Wellcome " + object.name);
    var inp = prompt("Do you want to append or delete")
}