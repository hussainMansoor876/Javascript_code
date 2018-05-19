function Hello(){
    document.write("Hello World");
}
function checkAddress(email){
    if (document.getElementById(email).value === ""){
        alert("Please enter an invalid email adress");
    }
}