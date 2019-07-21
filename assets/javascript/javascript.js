let goal = 0;
let goalMaxVal = 120;
let goalMinVal = 19;

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
        crystal4Cal = Math.floor(Math.random() * (crystalMaxVal - crystalMinVal)) + crystalMinVal;

        userGuess = 0;

        $("#randomNumberBox").text(goal);
    }
}