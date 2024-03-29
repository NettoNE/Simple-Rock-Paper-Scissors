// define game rounds
const gameRounds = prompt("What is the number of matches? If you want to play freely, click 'cancel'");

// restart feature stuff
let newGameButton = document.querySelector('.new-game');
let footerElement = document.querySelector('footer');
let buttons = document.querySelectorAll(".btn");

let globalWinner;

// get options
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

// create game counters
let userParagraphCounter = document.createElement("p");
userParagraphCounter.textContent = "0";
userCounter.appendChild(userParagraphCounter);

let machineParagraphCounter = document.createElement("p");
machineParagraphCounter.textContent = "0";
machineCounter.appendChild(machineParagraphCounter);

let stalemateParagraphCounter = document.createElement("p");
stalemateParagraphCounter.textContent = "0";
stalemateCounter.appendChild(stalemateParagraphCounter);

let roundParagraphCounter = document.createElement("p");
roundParagraphCounter.textContent = "0";
roundCounter.appendChild(roundParagraphCounter);

// create game logs
let winnnerParagraphLog = document.createElement("p");
winnnerParagraphLog.textContent = "Simple RPS";
winnerLog.appendChild(winnnerParagraphLog);

let gameParagraphLog = document.createElement("p");
gameParagraphLog.textContent = "by NettoNE";
gameLog.appendChild(gameParagraphLog);


// code counters
let user = 0;
let machine = 0;
let stalemate = 0;
let round = 0;

let userChoice;
let machineChoice;

function getUserChoice() {

	rock.addEventListener('click', function () {
		userChoice = 'rock';
		game();
	});

	paper.addEventListener('click', function () {
		userChoice = 'paper';
		game();
	});

	scissors.addEventListener('click', function () {
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

	// write in the interface what the machine and the user played 
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
	if (winnerLog.firstElementChild.textContent === message) {
		message += " AGAIN...";
		winnerLog.firstElementChild.textContent = message;
	} else {
		winnerLog.firstElementChild.textContent = message;
	}

	// increase stalemate counter
	stalemateCounterTreatment();

	// increase round counter
	roundCounterTreatment();
}

function winnerTreatment(winner) {
	let message;

	if (winner === "user") {
		message = "You won!";
		if (winnerLog.firstElementChild.textContent === message) {
			message += " Again...";
		}
		// increase user winning counter
		userCounterTreatment();
	} else {
		message = "The machine won!";
		if (winnerLog.firstElementChild.textContent === message) {
			message += " Again...";
		}
		// increase machine winning counter
		machineCounterTreatment();
	}

	// write on the interface who won 
	winnerLog.firstElementChild.textContent = message;

	// increase round counter
	roundCounterTreatment();
}

function optionPlayed() {
	gameLog.firstElementChild.textContent =
		`You: ${userChoice} | Machine: ${machineChoice}`;
}

function stalemateCounterTreatment() {
	stalemate++;
	stalemateCounter.lastElementChild.textContent = stalemate;
}

function userCounterTreatment() {
	user++;
	userCounter.lastElementChild.textContent = user;
}

function machineCounterTreatment() {
	machine++;
	machineCounter.lastElementChild.textContent = machine;
}

function roundCounterTreatment() {
	
	// check if all games have been played
	endGame();
	
	round++;
	roundCounter.lastElementChild.textContent = round;
}

function endGame() {
	let i;
	if (round == gameRounds) {

		// assigns variable globalWinner to be used later in a message
		globalWinnerTreatment();

		footerElement.classList.add("disable");

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.add("disable");
		}

		newGameButton.classList.add('enable')

		alert(`You played ${round} games! ${globalWinner}`);
	}
}

function globalWinnerTreatment() {

	if (user == machine) {
		globalWinner = "It was a draw!";
	} else {
		if (user > machine) {
			globalWinner = "The winner was the player";
		} else {
			globalWinner = "The winner was the machine";
		}
	}
}

// restart the game
function restartGame() {
	location.reload();
}

window.onload = getUserChoice;