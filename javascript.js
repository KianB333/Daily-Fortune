const rollBtn = document.querySelector(".roll");
rollBtn.addEventListener("click", (e) => {
    rollDice();
});

const die1 = document.querySelector(".die1");
const die2 = document.querySelector(".die2");
const die3 = document.querySelector(".die3");

//rolls the dice, stores all 3 rolls
const dice = ["ice-dice", "moon-dice", "lightning-dice", "fire-dice", "sun-dice", "star-dice"];
let roll1;
let roll2;
let roll3;
function rollDice() {
    roll1 = dice[Math.floor(Math.random()*6)];
    die1.src = `${"./img/"+roll1+".png"}`;
    roll2 = dice[Math.floor(Math.random()*6)];
    die2.src = `${"./img/"+roll2+".png"}`;
    roll3 = dice[Math.floor(Math.random()*6)];
    die3.src = `${"./img/"+roll3+".png"}`;
}


