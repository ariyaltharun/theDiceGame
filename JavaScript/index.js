// Generating random number range 1-6 for two players 
var playerOne = Math.floor(Math.random() * 6) + 1;
var playerTwo = Math.floor(Math.random() * 6) + 1;

// Selecting images of the dice and storing it in a variable
var diceOneImg = document.querySelectorAll("img")[0];
var diceTwoImg = document.querySelectorAll("img")[1];


//  Manipulating(setting) the attributes for playerOne based on the random number generated
if (playerOne === 1) {
    diceOneImg.setAttribute("src", "images/dice1.png");
} else if (playerOne === 2) {
    diceOneImg.setAttribute("src", "images/dice2.png");
} else if (playerOne === 3) {
    diceOneImg.setAttribute("src", "images/dice3.png");
} else if (playerOne === 4) {
    diceOneImg.setAttribute("src", "images/dice4.png");
} else if (playerOne === 5) {
    diceOneImg.setAttribute("src", "images/dice5.png");
} else if (playerOne === 6) {
    diceOneImg.setAttribute("src", "images/dice6.png");
}


//  Manipulating(setting) the attributes for playerTwo based on the random number generated
if (playerTwo === 1) {
    diceTwoImg.setAttribute("src", "images/dice1.png");
} else if (playerTwo === 2) {
    diceTwoImg.setAttribute("src", "images/dice2.png");
} else if (playerTwo === 3) {
    diceTwoImg.setAttribute("src", "images/dice3.png");
} else if (playerTwo === 4) {
    diceTwoImg.setAttribute("src", "images/dice4.png");
} else if (playerTwo === 5) {
    diceTwoImg.setAttribute("src", "images/dice5.png");
} else if (playerTwo === 6) {
    diceTwoImg.setAttribute("src", "images/dice6.png");
}


// Deciding whether the playerOne or playerTwo wins
if (playerOne > playerTwo) {
    document.querySelector("h1").textContent = "🎉 Player 1 wins! 🎉";
} else if (playerOne < playerTwo) {
    document.querySelector("h1").textContent = "🎉 Player 2 wins! 🎉";
} else {
    document.querySelector("h1").textContent = "👏 Draw!! 👏";
}