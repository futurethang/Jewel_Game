// HTML CONTAINERS:
var $jewel1 = $("#jewel_1");
var $jewel2 = $("#jewel_2");
var $jewel3 = $("#jewel_3");
var $jewel4 = $("#jewel_4");

var $targetNumber = $("#targetNumber");

var $answerZone = $("#answerZone");

var answer = 0;

var $jewelImg1 = "<img class='jewel_img' src='assets/images/red_jewel.png' />";
var $jewelImg2 = "<img class='jewel_img' src='assets/images/blue_jewel.png' />";
var $jewelImg3 = "<img class='jewel_img' src='assets/images/purple_jewel.png' />";
var $jewelImg4 = "<img class='jewel_img' src='assets/images/yellow_jewel.png' />";

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
    $jewel1.append($jewelImg1);
    $jewel2.attr("numberID", jewelNumber());
    $jewel2.append($jewelImg2);
    $jewel3.attr("numberID", jewelNumber());
    $jewel3.append($jewelImg3);
    $jewel4.attr("numberID", jewelNumber());
    $jewel4.append($jewelImg4);

    $(".jewel_img").jqFloat({width:20, height:20, speed:2000});

    $answerZone.text("Your Guess Here");

    $(".jewel").on("click", function() {
        answer += parseInt($(this).attr("numberID"));
        $answerZone.text(answer);
        numberMatch(target,answer);
    })
});