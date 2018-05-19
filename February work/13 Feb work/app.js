// var arr =new Array(1,10);
// alert(arr[0]);
// alert(arr[1]);
var arr = [] ;
for (var i = 0, j=0 ; i < 100; i = i + 5 , j++) {
    arr[j] = i;
}
document.write(arr);
console.log(arr);
document.write("\n");
var arr1 = [] ;
for (var i = 0, j=0 ; i < 100; i = i + 5 , j++) {
    if ( i > 50 ){
        break;
    }
    arr1[j] = i;
}
document.write(arr1);
console.log(arr1);