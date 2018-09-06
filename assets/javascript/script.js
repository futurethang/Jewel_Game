// HTML CONTAINERS:
var $jewel1 = $("#jewel_1");
var $jewel2 = $("#jewel_2");
var $jewel3 = $("#jewel_3");
var $jewel4 = $("#jewel_4");

var $targetNumber = $("#targetNumber");

var $answerZone = $("#answerZone");

var target;
var answer = 0;

var $jewelImgTarget = "<img class='jewel_img_target' src='assets/images/big_jewel.png' />";
var $jewelImg1 = "<img class='jewel_img' src='assets/images/red_jewel.png' />";
var $jewelImg2 = "<img class='jewel_img' src='assets/images/blue_jewel.png' />";
var $jewelImg3 = "<img class='jewel_img' src='assets/images/purple_jewel.png' />";
var $jewelImg4 = "<img class='jewel_img' src='assets/images/yellow_jewel.png' />";

var gameReset = "<button class='reset' id='reset'>start a new game</button>";
var gamesWon = 0;
var gamesLost = 0;

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
        gameOver(target,answer)
    }
}

function gameReset() {
    target = guessNumber();
    console.log(target);
    $targetNumber.empty();
    $targetNumber.html("<h2 class='centered'>" + target + "</h2>");
    $("#targetNumber").hide().append($jewelImgTarget);
    $("#targetNumber").fadeIn(3000);
    
    setTimeout(createJewels, 4000);
    // createJewels();

    $answerZone.text("Your Guess Here");

    $(".jewel").on("click", function() {
        console.log("ready");
        answer += parseInt($(this).attr("numberID"));
        $answerZone.text(answer);
        numberMatch(target,answer);
    })
}

function gameOver(target,answer) {
    alert("Oh shucks, you overshot the answer by " + parseInt(answer - target) + "!");
    $jewel1.animate({opacity: 0, top: "+=2000"}, 3000)
    $jewel2.animate({opacity: 0, top: "+=2000"}, 3000)
    $jewel3.animate({opacity: 0, top: "+=2000"}, 3000)
    $jewel4.animate({opacity: 0, top: "+=2000"}, 3000)
    $(".jewel").fadeOut(3000);
    // $(".jewel").jqFloat({width:2000, height:2000, speed:200}).fadeOut(3000);
    $("#targetNumber").fadeTo(3000, .1);
    $answerZone.empty().append(gameReset);
    $("#reset").on("click", function(){
        gamesLost++;
        window.gameReset();
        console.log(gamesLost);
    })
}

function gameWon(target,answer) {
    alert("You got it!");
    $(".jewel").jqFloat({width:700, height:700, speed:200});
    $answerZone.empty().append(gameReset);
    $("#reset").on("click", function(){
        gamesWon++;
        gameReset;
    })
}

function createTargetJewel() {
    $("#targetNumber").hide().append($jewelImgTarget);
    $("#targetNumber").fadeIn(3000);
}

function createJewels() {
    $jewel1.attr("numberID", jewelNumber());
    $jewel1.hide().append($jewelImg1);
    $jewel1.fadeIn(500);
    $jewel2.attr("numberID", jewelNumber());
    $jewel2.hide().append($jewelImg2);
    $jewel2.fadeIn(500);
    $jewel3.attr("numberID", jewelNumber());
    $jewel3.hide().append($jewelImg4);
    $jewel3.fadeIn(500);
    $jewel4.attr("numberID", jewelNumber());
    $jewel4.hide().append($jewelImg3);
    $jewel4.fadeIn(500);

    $(".jewel_img").jqFloat({width:20, height:20, speed:2000});
}

$(document).ready(function () {
    console.log(guessNumber());
    console.log(jewelNumber());

    target = guessNumber();
    $targetNumber.html("<h2 class='centered'>" + target + "</h2>");

    createTargetJewel();
    setTimeout(createJewels, 4000);
    // createJewels();

    $answerZone.text("Your Guess Here");

    $(".jewel").on("click", function() {
        answer += parseInt($(this).attr("numberID"));
        $answerZone.text(answer);
        numberMatch(target,answer);
    })
});