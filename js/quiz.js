const info_box = document.querySelector(".info_box");
const continue_btn = info_box.querySelector(".forward");
const result_box = document.querySelector(".result_box");
const time_line = document.querySelector(".time_line");
const timeCount = document.querySelector(".timer .timer_sec");
const quit_quiz = result_box.querySelector(".quit");
const submit_btn = document.querySelector(".submit_btn");
const ul = document.querySelector("#ans-list");
const ul2 = document.querySelector("#corr-list");


let timeValue = 59;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let score = 0;
let timeTaken = 0;
let correctAns = [];
let wrongAns = [];
let corrAns = ["Q01 - Ratnapura", "Q02 - Ambalangoda", "Q03 - Sigiriya", "Q04 - King Mahasen", "Q05 - 9", "Q06 - Piduruthalagala", "Q07 - Mahaweli River", "Q08 - VolleyBall", "Q09 - Sinharaja", "Q10 - Sri Jayawardhanepura Kotte"];

continue_btn.onclick = function () { continueForward() };


function continueForward() {
    console.log("show quiz");
    hideContent("info");
    showContent("quiz");
    startTimerLine(0);
    startTimer(59);
}

submit_btn.onclick = function () { submitAll() };
function submitAll() {
    console.log("hit button");
    submitQue();
    showResult();
}

quit_quiz.onclick = function () { closeQuiz() };
function closeQuiz() {
    window.location.reload();
}

function submitQue() {
    var answers = ["a3", "b1", "c2", "d2", "e4", "q3", "r1", "s3", "t1", "u4"]
    timeTaken = 60 - timeValue;
    stopTimer(counter);
    stopTimer(counterLine);
    for (let index = 0; index < answers.length; index++) {
        var ans = document.getElementById(answers[index]);
        if (ans.checked == true) {
            score+= 2;
            correctAns.push(index);
            continue;
        } else {
            console.log("issue find" + index);
            score--;
            wrongAns.push(index);
        }
        console.log("go loop");
    }
}

function showResult() {

    hideContent("info");
    hideContent("quiz");
    showContent("result");
    result_box.classList.add("activeResult");
    for (var i = 0; i < correctAns.length; i++) {
        var ans = correctAns[i] + 1;
        var listItem = document.createElement("li");
        listItem.textContent = "Answer " + ans;
        ul.appendChild(listItem);
    }

    console.log(wrongAns);
    for (var i = 0; i < wrongAns.length; i++) {
        var cAns = corrAns[wrongAns[i]];
        var listItem2 = document.createElement("li");
        listItem2.textContent = "Correct Answer " + cAns;
        ul2.appendChild(listItem2);
    }
    var points;
    if (score < 0){
        points = 0;
    }else{
        points = score;
    }
    document.getElementById("marks").innerHTML = "You Scored " + points + " marks... <br/>" + "You have taken " + timeTaken + " seconds.";
    if (points >= 12) {
        document.getElementById("result").style.background = "#99ff99";
        document.getElementById("res-title").innerHTML = "Great work..! Congrats.."
    }
    else if (score >= 5) {
        document.getElementById("result").style.background = "#ffff80";
        document.getElementById("res-title").innerHTML = "Up to the level..! Congrats.."
    }
    else {
        document.getElementById("result").style.background = "#ff8080";
        document.getElementById("res-title").innerHTML = "Fine Attemt..! Try again.."
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        timeValue = time;
        if (time <= 0) {
            timeTaken = 60 - timeValue;
            console.log("time break " + timeValue);
            stopTimer(counter);
            stopTimer(counterLine);
            submitQue();
            showResult();
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 1000);
    function timer() {
        time += 1;
        time_line.style.width = time * 100 / 60 + "%";
    }
    if (time == 60) {
        stopTimer(counterLine);
    }
}

function stopTimer(counter) {
    clearInterval(counter);
}

function hideContent(divison) {
    var ele = document.getElementById(divison);
    ele.style.display = "none";

}

function showContent(divison) {
    var ele = document.getElementById(divison);
    ele.style.display = "block";
    document.getElementById(divison).style.opacity = 1;
}


