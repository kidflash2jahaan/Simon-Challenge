let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickPattern = []

let level = 0

function playAnimation(color, clicked = false) {
    if (clicked === false) $("#" + color).fadeOut(100).fadeIn(100)
    else {
        $("#" + color).addClass("pressed")
        setTimeout(function () {
            $("#" + color).removeClass("pressed")
        }, 100)
    }
    new Audio("sounds/" + color + ".mp3").play()

    console.log(gamePattern)
    console.log(userClickPattern)
}

function nextSequence() {
    level++
    $("#level-title").text("Level " + level)

    userClickPattern = [];

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    setTimeout(function () {
        playAnimation(randomChosenColor)
    }, 1000)
}

function restart() {
    level = 0;
    gamePattern = []
}

$(document).on("keypress", function () {
    if (level === 0) nextSequence()
})

$(".btn").on("click", function (event) {
    let userChosenColor = event.target.id
    userClickPattern.push(userChosenColor)
    playAnimation(userChosenColor, clicked = true)

    if (userChosenColor !== gamePattern[userClickPattern.length - 1]) {
        $("#level-title").text("Game Over, Press Any Key to Restart")
        new Audio("sounds/wrong.mp3").play()
        $("body").addClass("game-over")

        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200)
        
        restart()

    } else if (userClickPattern.length === gamePattern.length) {
        nextSequence()
    }
})