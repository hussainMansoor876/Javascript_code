function cal(num){
    var val= document.getElementById(num).value
    return document.getElementById('num1').value +=val;
}
function operator(num2){
    var val2 = document.getElementById(num2).value;
    return document.getElementById('num1').value +=val2; 
}
function answer(ans){
    var answer1 = document.getElementById(ans).value;
    ans1 =  +eval(answer1);
    document.getElementById('num1').value = ans1;    
}