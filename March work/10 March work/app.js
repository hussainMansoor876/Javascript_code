function call() {
    var val = document.getElementById('none').className;
    if (val === "name") {
        document.getElementById('none').className = 'hidden';
    }
    else{
        document.getElementById('none').className = 'name';
    }
}
function swapPic(){
    document.getElementById("before").src = "cl2.jpg";
}