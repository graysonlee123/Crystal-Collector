let goal = 0;
let goalMaxVal = 120;
let goalMinVal = 19;

let wins = 0;
let losses = 0;

let crystalMaxVal = 12;
let crystalMinVal = 1;

let crystal1Val = 0;
let crystal2Val = 0;
let crystal3Val = 0;
let crystal4Val = 0;

let userGuess = 0;

game = {
    initialize: function () {
        goal = Math.floor(Math.random() * (goalMaxVal - goalMinVal)) + goalMinVal;

        crystal1Val = Math.floor(Math.random() * (crystalMaxVal - crystalMinVal)) + crystalMinVal;
        crystal2Val = Math.floor(Math.random() * (crystalMaxVal - crystalMinVal)) + crystalMinVal;
        crystal3Val = Math.floor(Math.random() * (crystalMaxVal - crystalMinVal)) + crystalMinVal;
        crystal4Val = Math.floor(Math.random() * (crystalMaxVal - crystalMinVal)) + crystalMinVal;

        userGuess = 0;

        $("#randomNumberBox").text(goal);
    },

    checkForWin: function () {
        if (userGuess == goal) {
            game.win();
        } else if (userGuess > goal) {
            game.lose();
        } else {
            console.log("No win or loss");
        }
    },

    win: function () {
        game.initialize();
        wins++;
        $("#gameEndMessage").text("You won the last round!");
        $("#winsDisplay").text(wins);
        $("#userScoreDisplay").text("0");
    },

    lose: function () {
        game.initialize();
        losses++;
        $("#gameEndMessage").text("You lost the last round!");
        $("#lossesDisplay").text(losses);
        $("#userScoreDisplay").text("0");
    }
}

game.initialize();

$("#crystalsContainer").on("click", ".crystal", function (e) {
    let crystalID = e.currentTarget.id;

    if (crystalID == "crystal1") {
        userGuess += crystal1Val;
        console.log(userGuess);
    } else if (crystalID == "crystal2") {
        userGuess += crystal2Val;
        console.log(userGuess);
    } else if (crystalID == "crystal3") {
        userGuess += crystal3Val;
        console.log(userGuess);
    } else {
        userGuess += crystal4Val;
        console.log(userGuess);
    }

    $("#userScoreDisplay").text(userGuess);

    game.checkForWin();


});