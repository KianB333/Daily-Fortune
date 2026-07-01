const rollBtn = document.querySelector(".roll");
rollBtn.addEventListener("click", (e) => {
    rollDice();
});

const die1 = document.querySelector(".die1");
const die2 = document.querySelector(".die2");
const die3 = document.querySelector(".die3");

//rolls the 3 dice, stores the values, updates images
const dice = ["moon", "lightning", "ice", "star", "fire", "sun"]
let roll = {
    1: null,
    2: null,
    3: null,
};
function rollDice() {
    roll[1] = [Math.floor(Math.random()*6)];
    die1.src = `${"./img/"+dice[roll[1]]+"-dice.png"}`;
        //console.log(roll[1]);
    roll[2] = [Math.floor(Math.random()*6)];
    die2.src = `${"./img/"+dice[roll[2]]+"-dice.png"}`;
        //console.log(roll[2]);
    roll[3] = [Math.floor(Math.random()*6)];
    die3.src = `${"./img/"+dice[roll[3]]+"-dice.png"}`;
        //console.log(roll[3]);
    tallyTheDice();
}

//counts how many rolls each dice got
const diceTally = [0,0,0,0,0,0];
function tallyTheDice() {
    diceTally.splice(0,diceTally.length,0,0,0,0,0,0); //resets diceTally
    for(let rollNumber = 1; rollNumber <= 3; rollNumber++) {
        if (roll[rollNumber] == null) {
            break;
        } else {
            diceTally[`${roll[rollNumber]}`] += 1;
        };
    };
    //uncomment debugging code below to set diceTally manually
//    diceTally.splice(0,diceTally.length,0,0,0,0,0,0);
    interpretFortune();
};
//determines fortune from dice rolls
let fortune = document.querySelector(".fortune");
let health = document.querySelector(".health");
function interpretFortune() {
    switch(true) {
        case //no dice rolls
            diceTally.toString() == [0,0,0,0,0,0]:
                console.log("the dice are unrolled");
                break;
        case //three sun
            diceTally[5] == 3:
                console.log(diceTally);
                break;
        case //three fire
            diceTally[4] == 3:
                console.log(diceTally);
                break;
        case //three star
            diceTally[3] == 3:
                console.log(diceTally);
                break;
        case //two sun, one red
            diceTally[5] == 2 && diceTally[3] + diceTally[4] == 1:
                console.log(diceTally);
                break;
        case //two fire, one red
            diceTally[4] == 2 && diceTally[3] + diceTally[5] == 1:
                console.log(diceTally);
                break;
        case //two star, one red
            diceTally[3] == 2 && diceTally[4] + diceTally[5] == 1:
                console.log(diceTally);
                break;
        case //all three different reds
            diceTally.slice(3,6).toString() == [1,1,1]:
                console.log(diceTally);
                break;
        case //two sun, one blue
            diceTally[5] == 2 && diceTally[0] + diceTally[1] + diceTally[2] == 1:
                console.log(diceTally);
                break;
        case //two fire, one blue
            diceTally[4] == 2 && diceTally[0] + diceTally[1] + diceTally[2] == 1:
                console.log(diceTally);
                break;
        case //two star, one blue
            diceTally[3] == 2 && diceTally[0] + diceTally[1] + diceTally[2] == 1:
                console.log(diceTally);
                break;
        case //sun, star, any blue
            diceTally.slice(3,6).toString() == [1,0,1] && diceTally[0] + diceTally[1] + diceTally[2] == 1:
                console.log(diceTally);
                break;
        case //sun, fire, any blue
            diceTally.slice(3,6).toString() == [0,1,1] && diceTally[0] + diceTally[1] + diceTally[2] == 1:
                console.log(diceTally);
                break;
        case //star, fire, any blue
            diceTally.slice(3,6).toString() == [1,1,0] && diceTally[0] + diceTally[1] + diceTally[2] == 1:
                console.log(diceTally);
                break;
        case //moon, lightning, any red
            diceTally.slice(0,3).toString() == [1,1,0] && diceTally[3] + diceTally[4] + diceTally[5] == 1:
                console.log(diceTally);
                break;
       case //moon, ice, any red
            diceTally.slice(0,3).toString() == [1,0,1] && diceTally[3] + diceTally[4] + diceTally[5] == 1:
                console.log(diceTally);
                break;
        case //lightning, ice, any red
            diceTally.slice(0,3).toString() == [0,1,1] && diceTally[3] + diceTally[4] + diceTally[5] == 1:
                console.log(diceTally);
                break;
        case //two ice, any red
            diceTally[2] == 2 && diceTally[3] + diceTally[4] + diceTally[5] == 1:
                console.log(diceTally);
                break;
        case //two lightning, any red
            diceTally[1] == 2 && diceTally[3] + diceTally[4] + diceTally[5] == 1:
                console.log(diceTally);
                break;
        case //two moon, any red
            diceTally[0] == 2 && diceTally[3] + diceTally[4] + diceTally[5] == 1:
                console.log(diceTally);
                break;
        case //all three different blue
            diceTally.slice(0,3).toString() == [1,1,1]:
                console.log(diceTally);
                break;
        case //two ice, one blue
            diceTally[2] == 2 && diceTally[0] + diceTally[1] == 1:
                console.log(diceTally);
                break;
        case //two lightning, one blue
            diceTally[1] == 2 && diceTally[0] + diceTally[2] == 1:
                console.log(diceTally);
                break;
        case //two moon, one blue
            diceTally[0] == 2 && diceTally[1] + diceTally[2] == 1:
                console.log(diceTally);
                break;
        case //three ice
            diceTally[2] == 3:
                console.log(diceTally);
                break;
        case //three lightning
            diceTally[1] == 3:
                console.log(diceTally);
                break;
        case //three moon
            diceTally[0] == 3:
                console.log(diceTally);
                break;
        default:
                console.log("This fortune has not been added yet, or something has gone terribly wrong");
                console.log(diceTally);
                break;
    }
}

/* [!]specific combo check[!]
case //
            diceTally.slice(pos,len).toString() == [#,#,#]:
                console.log(diceTally);
                break;
*/

/* [!]any blue/any red check[!]
case //
            diceTally[pos] == 2 && diceTally[pos] + diceTally[pos] + diceTally[pos] == 1:
                console.log(diceTally);
                break;
*/

