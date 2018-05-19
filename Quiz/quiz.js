var questions = [                    //1
    {
        "question": "How to create alert box?",
        "option1": "alert='hello world'",
        "option2": "aler('hello world')",
        "option3": "alert.('hello world')",
        "option4": "alert('hello world')",
        "answer": "4"
    },
    {

        "question": "How to create variable?",
        "option1": "variable name = 'ali'",
        "option2": "var name = 'ali'",
        "option3": "variable: 'ali'",
        "option4": "variable. 'ali'",
        "answer": "2"
    },
    {

        "question": "How to create function?",
        "option1": "Function(){}",
        "option2": "function.create()",
        "option3": "function(){}",
        "option4": "function{}",
        "answer": "3"
    },
    {

        "question": "How to push value in array?",
        "option1": "arr.push(value)",
        "option2": "arr.push.value",
        "option3": "arr.(value)",
        "option4": "arr.value.push(value)",
        "answer": "1"
    },
    {

        "question": "What is javascript",
        "option1": "programming language",
        "option2": "scripting language",
        "option3": "codding language",
        "option4": "web language",
        "answer": "2"
    }

];

var question = document.getElementById('question');    //1
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');

question.innerHTML = questions[0].question;        //1
option1.innerHTML = questions[0].option1;
option2.innerHTML = questions[0].option2;
option3.innerHTML = questions[0].option3;
option4.innerHTML = questions[0].option4;

var load = 0;
var correct = 0;
window.onload = function timer(){
    var timer = document.getElementById('timer');
    var min = 4;
    var sec = 10;
    var timerstart = setInterval(function(){
        timer.innerHTML = min + ":" + sec;
        sec --;
        if(min < 0){
            clearInterval(timerstart);
        }
        else if( sec === 0){
            min--;
            sec = 10;
        }
    },1000)
}
function next() {
    var val = document.querySelector("input[name='option']:checked");    //2
    //   console.log(val.value);

    if (val === null) {
        alert("Select anyOne")
    }
    else {
        if (questions[load].answer === val.value) {
            console.log("right");
            correct++;
        }
        else {
            console.log("wrong");
        }


        if (questions.length - 1 === load) {
            alert("Question End");
            var score = correct * 20;
            document.getElementById("quizcontainer").style.display = "none";
            document.getElementById("resultcontainer").style.display = "block";
            document.getElementById("score").innerHTML = "Your Score is " + score + "%";
        }
        else {
            document.querySelector("input[name='option']:checked").checked = false
            load++;                                                  //1
            question.innerHTML = questions[load].question;
            option1.innerHTML = questions[load].option1;
            option2.innerHTML = questions[load].option2;
            option3.innerHTML = questions[load].option3;
            option4.innerHTML = questions[load].option4;
        }
    }

}