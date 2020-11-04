// function statement / declaration

// function funcName () {
//     code goes here!
// }

function rollDice()
{
    let roll = Math.floor(Math.random() * 6 ) + 1;
    console.log(roll);
}

function throwDie()
{
    for(i = 0; i < 6; i++) {
        rollDice();
    }
}