// HTML CONTAINERS:
var $jewel1 = $("#jewel_1");
var $jewel2 = $("#jewel_2");
var $jewel3 = $("#jewel_3");
var $jewel4 = $("#jewel_4");


// GAME VARIABLES
var $targetNumber = $("#targetNumber");
var $answerZone = $("#answerZone");
var target;
var answer;
var gamesWon = 0;
var gamesLost = 0;

// JQUERY IMAGE ELEMENTS
var $jewelImgTarget = "<img class='jewel_img_target' src='assets/images/big_jewel.png' />";
var $jewelImg1 = "<img class='jewel_img' src='assets/images/red_jewel.png' />";
var $jewelImg2 = "<img class='jewel_img' src='assets/images/blue_jewel.png' />";
var $jewelImg3 = "<img class='jewel_img' src='assets/images/purple_jewel.png' />";
var $jewelImg4 = "<img class='jewel_img' src='assets/images/yellow_jewel.png' />";
var gameResetButton = "<button class='reset' id='reset'>start a new game</button>";

// GAME FUNCTIONS
function guessNumber() { // GENERATE NUMBER TO MATCH
    return Math.floor(Math.random() * (121 - 19)) + 19;
}

function jewelNumber() { // GENERATE RANDOM NUMBERS FOR JEWELS
    return Math.floor(Math.random() * (12 - 1)) + 1;
}

function numberMatch(target, answer) { // CHECK IF TOTAL MATCHES TARGET NUMBER
    if (target === answer) {
        console.log("GAME WON!")
        alert("You got it!");
        gamesWon++;
        $("#wins").text(gamesWon);
        gameWon();
        $("#reset").on("click", function(){
            $(".jewel_img").jqFloat("stop");
            $(".jewel_img").remove();
            gameReset();
        });
    } else if (answer > target) {
        console.log("YOU LOSE!");
        alert("Oh shucks, you overshot the answer by " + parseInt(answer - target) + "!");
        gamesLost++;
        $("#losses").text(gamesLost);
        gameOver(target,answer);
        $("#reset").on("click", function(){
            $(".jewel_img").jqFloat("stop");
            $(".jewel_img").remove();
            gameReset();
        });
    }
}

function gameReset() { // REFRESH THE BOARD WITH NEW TARGET AND JEWELS
    target = guessNumber();
    answer = 0;
    $jewel1.empty();
    $jewel2.empty();
    $jewel3.empty();
    $jewel4.empty();
    console.log(target);
    $targetNumber.empty();
    $targetNumber.html("<h2 class='centered'>" + target + "</h2>");
    $("#targetNumber").hide().append($jewelImgTarget);
    $("#targetNumber").fadeTo(3000, 1);
    setTimeout(createJewels, 3000);

    $answerZone.text("Your Guess Here");
}

function gameOver(target,answer) { // GAME LOSS STATE AND TALLY
    $(".jewel_img").jqFloat('stop');
    $(".jewel_img").animate({opacity: 0, top: "+=2000"}, 3000);
    $(".jewel_img").fadeOut(3000);
    $("#targetNumber").fadeTo(3000, .1);
    $answerZone.empty().append(gameResetButton);
}

function gameWon() { // GAME WIN AND TALLY
    $(".jewel_img").jqFloat({width:700, height:700, speed:200});
    $answerZone.empty().append(gameResetButton);
}

function createTargetJewel() { // FADE IN AND DISPLAY GREEN JEWEL
    $("#targetNumber").hide().append($jewelImgTarget);
    $("#targetNumber").fadeIn(3000);
}

function createJewels() { // CREATE AND SET INPUT NUMBERS TO GUESSING JEWELS
    $jewel1.attr({"numberID": jewelNumber(), "style": "top: 0px, left: 0px"});
    $jewel1.hide().html($jewelImg1);
    $jewel1.fadeIn(500);
    $jewel2.attr({"numberID": jewelNumber(), "style": "top: 0px, left: 0px"});
    $jewel2.hide().html($jewelImg2);
    $jewel2.fadeIn(500);
    $jewel3.attr({"numberID": jewelNumber(), "style": "top: 0px, left: 0px"});
    $jewel3.hide().html($jewelImg4);
    $jewel3.fadeIn(500);
    $jewel4.attr({"numberID": jewelNumber(), "style": "top: 0px, left: 0px"});
    $jewel4.hide().html($jewelImg3);
    $jewel4.fadeIn(500);

    $(".jewel_img").jqFloat({width:20, height:20, speed:2000});
}

// SET INITIAL STATE ON PAGE LOAD
$(document).ready(function () {

    target = guessNumber();
    $targetNumber.html("<h2 class='centered'>" + target + "</h2>");

    createTargetJewel();
    setTimeout(createJewels, 3000);

    $answerZone.text("Your Guess Here");

    $(".jewel").on("click", function() {
        answer += parseInt($(this).attr("numberID"));
        $answerZone.text(answer);
        numberMatch(target,answer);
    })
});