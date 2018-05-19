// function checkForName() {
//     var targetField = document.getElementById("firstNameField");
//     if (targetField.value.length === 0) {
//         alert("Please enter your first name");
//         targetField.focus();
//         // targetField.style.backgroundColor = 'cyan';
//         return false;
//     }
//     else if (document.getElementById("lastNameField").value.length === 0) {
//         alert("Please enter your last name");
//         document.getElementById('lastNameField').focus();
//         return false;
//     }
// }
// function checkForSelection() {
//     if (document.getElementById("states").selectedIndex === 0) {
//         alert("Please select a state.");
//         return false;
//     }
// }
// function validateRadios() {
//     var radios = document.getElementsByName("r1");
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             return true;
//         }
//     }
//     alert("Please check one.");
//     return false;
// }
// function validateZIP() {
//     var valueEntered = document.getElementById("zip").value;
//     var numChars = valueEntered.length;
//     if (numChars < 5) {
//         alert("Please enter a 5-digit code.");
//         return false;
//     }
//     for (var i = 0; i <= 4; i++) {
//         var thisChar = parseInt(valueEntered[i]);
//         if (isNaN(thisChar)) {
//             alert("Please enter only numbers.");
//             return false;
//         }
//     }
// }
// function validateEmail() {
//     var addressIsLegal = true;
//     var eEntered = document.getElementById("address").value;
//     if (eEntered.indexOf(" ") !== -1) {
//         addressIsLegal = false;
//     }
//     if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
//         addressIsLegal = false;
//     }
//     if (addressIsLegal === false) {
//         alert("Please correct email address");
//         return false;
//     }
// }
// function validateEmail() {
//     var addressIsLegal = true;
//     var eEntered = document.getElementById("address").value;
//     if (eEntered.indexOf(" ") !== -1) {
//         addressIsLegal = false;
//     }
//     if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
//         addressIsLegal = false;
//     }
//     if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 || eEntered.indexOf(".") > eEntered.length - 3) {
//         addressIsLegal = false;
//     }
//     if (addressIsLegal === false) {
//         alert("Please correct email address");
//         return false;
//     }
// }
// function greetWorld() {
//     try {
//         var greeting = "Hello world!";
//         aler(greeting);
//     }
//     catch (err) {
//         alert(err);
//     }
// }
// greetWorld();
function checkPassword() {
    try {
        var pass = document.getElementById("f1").value;
        if (pass.length < 8) {
            throw "Please enter at least 8 characters.";
        }
        if (pass.indexOf(" ") !== -1) {
            throw "No spaces in the password, please.";
        }
        var numberSomewhere = false;
        for (var i = 0; i < pass.length; i++) {
            if (isNaN(pass(i, i + 1)) === false) {
                numberSomewhere = true;
                break;
            }
        }
        if (numberSomewhere === false) {
            throw "Include at least 1 number.";
        }
    }
    catch (err) {
        alert(err);
    }
}