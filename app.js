console.log('script')
class Game {
	constructor() {
		this.score = 0
	}

}

class Dice {
	constructor() {
		this.array = []
	}

	show(){
		console.log('dice show function')

		this.array.forEach((die) => {
			die.show()
		})
	}
}

class Die {
	constructor(name, value){
		this.name = name 
		this.value = value 
	}

	show(){
		console.log('name: ', this.name)
		console.log('value: ', this.value)
	}
};

function main(){
	let game = new Game()
	let dice = new Dice()

	init(game)

	rollDice(dice)

	renderLogs(game, dice)

}

function init(game){
	game.score = 0
}

function rollDice(dice){
	//i'// need to instantiate a count variable
	//whenever a 2 or 5 gets rolled, count --
	//while i <= count 
	for(let i = 1; i <= 5; i++) {
		let randomNum = Math.floor(Math.random() * (5 - 1) + 1)
		console.log(randomNum)
		let newDie = new Die(`die ${i}`, randomNum)
		dice.array.push(newDie)
	}
}

function renderLogs(game, dice){
	console.log(game.score)
	dice.show()
}

main()

