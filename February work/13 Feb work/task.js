// for (var i = 1; i <= 100;i++) {
//     console.log(i);
//     document.write(i+"<br>");
// }
var arr = [];
var i,j;
for( i = 2 ; i < 3 ; i++){
    for( j = 1 ; j<=20 ; j++){
        arr.push(i+"*"+j+"="+i*j);
    }
}
for(i = 1 ; i<20 ; i++){
    document.write(arr[i]+"<br>");
}