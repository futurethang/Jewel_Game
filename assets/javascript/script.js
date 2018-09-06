// HTML CONTAINERS:
var $jewel1 = $("#jewel_1");
var $jewel2 = $("#jewel_2");
var $jewel3 = $("#jewel_3");
var $jewel4 = $("#jewel_4");

var $targetNumber = $("#targetNumber");

var $answerZone = $("#answerZone");

function guessNumber() {
    return Math.floor(Math.random() * (121 - 19)) + 19;
}

function jewelNumber() {
    return Math.floor(Math.random() * (12 - 1)) + 1;
}

$(document).ready(function () {
    console.log(guessNumber());
    console.log(jewelNumber());

    $targetNumber.text(guessNumber());

    $jewel1.attr("numberID", jewelNumber());
    $jewel2.attr("numberID", jewelNumber());
    $jewel3.attr("numberID", jewelNumber());
    $jewel4.attr("numberID", jewelNumber());

    $answerZone.text("Your Guess Here");
});