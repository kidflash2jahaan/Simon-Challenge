let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickPattern = []

function playAnimation(color) {
    $("#" + color).fadeOut(100).fadeIn(100)
    new Audio("sounds/" + color + ".mp3").play()
}

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    
    playAnimation(randomChosenColor)
}

$(".btn").on("click", function (event) {
    let userChosenColor = event.target.id
    userClickPattern.push(userChosenColor)
    
    playAnimation(userChosenColor)
})

nextSequence()