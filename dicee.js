// This array stores the images
let imageArray = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
];

//Set up the screen

document.querySelector(".img1").src = imageArray[Math.floor(Math.random() * 6)];
document.querySelector(".img2").src = imageArray[Math.floor(Math.random() * 6)];

// Call a function on button click

const button1 = document.querySelector('.roll');

button1.addEventListener("click", function rollEm() {
    let dice1 = Math.floor(Math.random() * 6);
    let dice2 = Math.floor(Math.random() * 6);

    if (dice1 > dice2) {
        document.querySelector(".status").innerHTML = "Player 1 Wins!";
    } 
    else if ( dice1 === dice2){
        document.querySelector(".status").innerHTML = "Draw";
    }
    else {
        document.querySelector(".status").innerHTML = "PLayer 2 Wins!";
    }



    document.querySelector(".img1").src = imageArray[dice1];
    document.querySelector(".img2").src = imageArray[dice2];
    
    // alert("Button Pressed");
})