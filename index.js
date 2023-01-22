for (var  i = 0 ; i < (document.querySelectorAll(".drum").length) ; i ++ )
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonClicked = this.innerHTML;
        buttonAnimation(buttonClicked);
        
        checkKey(buttonClicked);

    });       
}

document.addEventListener("keydown", function(KeyboardEvent){
    checkKey(KeyboardEvent.key);

    buttonAnimation(KeyboardEvent.key);
});

function checkKey(letter) {
    switch(letter) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log("Something Wrong in our part!!!");    
    }
}

function buttonAnimation(keyPressed){

    var activeButton = document.querySelector("."+keyPressed);
    
    activeButton.classList.add("pressed");


    setTimeout((function() {
        activeButton.classList.remove("pressed");
    }), 100);

}