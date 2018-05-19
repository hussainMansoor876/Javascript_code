function submit() {
    var name = document.getElementById('name');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    localStorage.setItem('Name', name.value);
    localStorage.setItem('Number', number.value);
    localStorage.setItem('Email', email.value);
    localStorage.setItem('Password', password.value);
    name.value = '';
    number.value = '';
    password.value = '';
    email.value = '';
    window.location = 'login.html';
}
function login() {
    var userEmail = document.getElementById('userEmail');
    var userPassword = document.getElementById('userPassword');
    var storageEmail = localStorage.getItem('Email');
    var storagePassword = localStorage.getItem('Password');
    if (userEmail.value != storageEmail) {
        alert("Incorrect Email Please Enter Valid Email");
    }
    else if (userEmail.value == storageEmail && userPassword.value === storagePassword) {
        alert('Login Successfully');
        window.location = 'user.html';
    }
    else {
        alert("Invalid Password Please Enter Valid Password");
    }
}
var storageName = localStorage.getItem('Name');
var ename = document.getElementById('man');
ename.innerHTML = 'Wellcome ' + storageName;