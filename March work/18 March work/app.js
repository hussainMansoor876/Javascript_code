function add() {
    var val = document.getElementById('val');
    if (val.value == "") {
        alert("Please insert the data");
    }
    else {
        var list = document.getElementById('list');
        var li = document.createElement('li');
        var btn = document.createElement('button');
        // var btnText = document.createTextNode('Delete');
        var btn1 = document.createElement('button');        
        var btnText1 = document.createTextNode('Edit');
        var imag = document.createElement('img');
        imag.src = "images.jpg";
        imag.width = 50;
        btn.appendChild(imag);
        btn1.appendChild(btnText1);
        btn.onclick = function () {
            var li = this.parentNode;
            var ul = li.parentNode;
            ul.removeChild(li);
        }
        btn1.onclick = function () {
            var li = this.parentNode;
            var text = prompt("Enter update value");
            li.innerHTML = text;
            li.appendChild(btn);
            li.appendChild(btn1);
        }
        var text = document.createTextNode(val.value);
        li.appendChild(text);
        li.appendChild(btn);
        list.appendChild(li);
        li.appendChild(btn1);        
        val.value = "";
    }
}
function deleteAll() {
    document.getElementById('list').innerHTML = " ";
}
