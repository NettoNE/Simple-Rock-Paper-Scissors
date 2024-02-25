// get options
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

// get HTML counters
let userCounter = document.querySelector("#userCounter");
let machineCounter = document.querySelector("#machineCounter");
let stalemateCounter = document.querySelector("#stalemateCounter");
let roundCounter = document.querySelector("#roundCounter");
let winnerMsg = document.querySelector("#winnerMsg");
let gameLog = document.querySelector("#gameLog");

// code counters
let user = 0;
let machine = 0;
let stalemate = 0;
let round = 0;

let userChoice;
let machineChoice;

function getUserChoice() {

	rock.addEventListener('click', function() {
		userChoice = 'rock';
		game();
	});

	paper.addEventListener('click', function() {
		userChoice = 'paper';
		game();
	});

	scissors.addEventListener('click', function() {
		userChoice = 'scissors';
		game();
	});
}

function getMachineChoice() {
	let choices = ["rock", "paper", "scissors"];
	let randomIndex = Math.floor(Math.random() * 3);
	machineChoice = choices[randomIndex];
}

function game() {
	getMachineChoice();
	optionPlayed(); 
	
	if (userChoice === machineChoice) {
		stalemateTreatment();
	} else if (
		(userChoice === "paper" && machineChoice === "rock") ||
		(userChoice === "rock" && machineChoice === "scissors") ||
		(userChoice === "scissors" && machineChoice === "paper")
	) {
		winnerTreatment("user");
	} else {
		winnerTreatment("machine");
	}
}

function stalemateTreatment() {
	let message = "STALEMATE!";
	if (winnerMsg.firstElementChild.innerHTML === message) {
		message += " AGAIN...";
		winnerMsg.firstElementChild.innerHTML = message; 
	} else {
		winnerMsg.firstElementChild.innerHTML = message;
	}
	stalemate++;
	stalemateCounter.lastElementChild.innerHTML = stalemate;
	roundCounterTreatment();
}

function winnerTreatment(winner) {
	let message;
	if (winner === "user") {
		message = "You won!";
		if (winnerMsg.firstElementChild.innerHTML === message) {
			message += " Again...";
		}
		userCounterTreatment();
	} else {
		message = "The machine won!";
		if (winnerMsg.firstElementChild.innerHTML === message) {
			message += " Again...";
		}
		machineCounterTreatment();
	}
	winnerMsg.firstElementChild.innerHTML = message;
	roundCounterTreatment();
}

function optionPlayed() {
	gameLog.firstElementChild.innerHTML = `You: ${userChoice} | Machine: ${machineChoice}`;
}

function userCounterTreatment() {
	user++;
	userCounter.lastElementChild.innerHTML = user;
}

function machineCounterTreatment() {
	machine++;
	machineCounter.lastElementChild.innerHTML = machine;
}

function roundCounterTreatment() {
	round++;
	roundCounter.lastElementChild.innerHTML = round;
}

window.onload = getUserChoice;