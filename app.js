class Game {
  constructor() {
    this.score = 0;
    this.rollCount = 0;
    this.diceCount = 5;
  }
}

class Dice {
  constructor() {
    this.array = [];
  }

  show() {
    console.log("dice show function");

    this.array.forEach((die) => {
      die.show();
    });
  }
}

class Die {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  show() {
    console.log("name: ", this.name);
    console.log("value: ", this.value);
  }
}

function main() {
  let game = new Game();
  let dice = new Dice();

  init(game, dice);
  //run game several times
  renderButton(game, dice);
  //runGameTillEnd(game, dice);
}

function init(game) {
  game.score = 0;
}

function rollDice(game, dice) {
  //i'// need to instantiate a count variable
  //whenever a 2 or 5 gets rolled, count --
  dice.array = [];
  game.rollCount++;

  for (let i = 1; i <= game.diceCount; i++) {
    let randomNum = Math.floor(Math.random() * (6 - 1) + 1);
    let newDie = new Die(`die ${i}`, randomNum);
    dice.array.push(newDie);
  }
}

function renderLogs(game, dice) {
  dice.show();
  console.log(game);
}

function countScore(game, dice) {
  //for each die, if it equals 2 or 5, do negative thing, else game.score += dic
  //value
  dice.array.forEach((die) => {
    console.log(die.value);
    if (die.value === 2 || die.value === 5) {
      game.diceCount--;
    } else {
      game.score += die.value;
    }
  });
}

function runGameTillEnd(game, dice) {
  //this is just a test
  while (game.diceCount != 0) {
    rollDice(game, dice);
    countScore(game, dice);
    renderLogs(game, dice);
		document.body.innerHTML += `<p>Dice Roll: ${game.rollCount}</p>`;
    dice.array.forEach((die) => {
      document.body.innerHTML += `<p>Name ${die.name}</p>`;
      document.body.innerHTML += `<p>Value ${die.value}</p>`;
    });
  }
}

function renderButton(game, dice) {
  document.body.innerHTML += "<button>show dice</button>";
  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    buttonAction(game, dice);
  });
}

function buttonAction(game, dice) {
  document.body.innerHTML = ``;
	renderButton(game,dice)
  document.body.innerHTML += `<h3>${game.score}</h3>`;
  console.log("button action dice: ", dice);
  init(game, dice);
  runGameTillEnd(game, dice);
  document.body.innerHTML += `<h3>${game.score}</h3>`;
}

main();
