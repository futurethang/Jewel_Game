// HTML CONTAINERS:
var $jewel1 = $("#jewel_1");
var $jewel2 = $("#jewel_2");
var $jewel3 = $("#jewel_3");
var $jewel4 = $("#jewel_4");

var $targetNumber = $("#targetNumber");

var $answerZone = $("#answerZone");

var answer = 0;

function guessNumber() {
    return Math.floor(Math.random() * (121 - 19)) + 19;
}

function jewelNumber() {
    return Math.floor(Math.random() * (12 - 1)) + 1;
}

function numberMatch(target, answer) {
    if (target === answer) {
        console.log("GAME WON!")
        gameWon();
    } else if (answer > target) {
        console.log("YOU LOSE!")
        gameOver()
    }
}

$(document).ready(function () {
    console.log(guessNumber());
    console.log(jewelNumber());

    var target = guessNumber();
    $targetNumber.text(target);

    $jewel1.attr("numberID", jewelNumber());
    $jewel2.attr("numberID", jewelNumber());
    $jewel3.attr("numberID", jewelNumber());
    $jewel4.attr("numberID", jewelNumber());

    $answerZone.text("Your Guess Here");

    $(".jewel").on("click", function() {
        answer += parseInt($(this).attr("numberID"));
        $answerZone.text(answer);
        numberMatch(target,answer);
    })
});