var buttonColors = ["red", "blue", "yellow", "green"]
var gamePath = []
var userClickedPattern = []
var level = 0


$(".start").click(function() {
    level = 0
    gamePath = []
    userClickedPattern = []
    nextSequence();
})

function nextSequence() {
    level ++
    $("h1").text("Level " + level)
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor = buttonColors[randomNumber]
    gamePath.push(randomChosenColor)
    animatePress(randomChosenColor)
    playSound(randomChosenColor)
}

$(".button").click(function(){
    var userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    cheakAnswer(userClickedPattern.length-1)
})


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("active")
    setTimeout(function(){
        $("." + currentColor).removeClass("active")
    }, 100)
}

function cheakAnswer(currentLevel) {
    if (gamePath[currentLevel] === userClickedPattern[currentLevel]){
        
        if (gamePath.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence()
            }, 1000)
            userClickedPattern = []
        }
        
    }else{
        var wrondSound = new Audio("sounds/wrong.mp3")
        wrondSound.play()
        $("body").addClass("wrong")
        setTimeout(function(){
            $("body").removeClass("wrong")
        } ,200)
        $("h1").text('Game Over! Press The "Start" Button to start Again')
    } 

}
