const rollBtn = document.querySelector(".roll");
rollBtn.addEventListener("click", (e) => {
    rollDice();
});

const die1 = document.querySelector(".die1");
const die2 = document.querySelector(".die2");
const die3 = document.querySelector(".die3");

//rolls the 3 dice, stores the values, changes the images
const dice = ["ice", "moon", "lightning", "fire", "sun", "star"];
let roll = {
    1: null,
    2: null,
    3: null,
};
function rollDice() {
    roll[1] = dice[Math.floor(Math.random()*6)];
    die1.src = `${"./img/"+roll[1]+"-dice.png"}`;
    roll[2] = dice[Math.floor(Math.random()*6)];
    die2.src = `${"./img/"+roll[2]+"-dice.png"}`;
    roll[3] = dice[Math.floor(Math.random()*6)];
    die3.src = `${"./img/"+roll[3]+"-dice.png"}`;
    tallyTheDice();
}

//counts how many rolls each dice got
function tallyTheDice() {
    let diceTally = {
        ice: 0,
        moon: 0,
        lightning: 0,
        fire: 0,
        sun: 0,
        star: 0,
    };
    for(let rollNumber = 1; rollNumber <= 3; rollNumber++) {
        diceTally[`${roll[rollNumber]}`] += 1;
    }
}