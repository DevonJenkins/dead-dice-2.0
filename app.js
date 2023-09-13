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
	}
}

class Die {
	constructor(){
		this.name = null 
		this.value = null 
	}

	show(){
		console.log('name: ', name)
		console.log('value: ', value)
	}
};

function main(){
	let game = new Game()
	let dice = new Dice()

	init(game)

	rollDice()

	renderLogs(game)

}

function init(game){
	game.score = 0
}

function rollDice(){
	console.log('roll dice function')
	for(let i = 1; i <= 5; i++) {
		console.log(i)
		let randomNum 
		let newDie = new Die(i, randomNum)

	}
}

function renderLogs(game, dice){
	console.log(game.score)
}

main()

