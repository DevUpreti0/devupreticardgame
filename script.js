class AudioController {
	constructor() {
		this.bgMusic = new Audio('Assets/Audio/creepy.mp3');
		this.flipSound = new Audio('Assets/Audio/flip.wav');
		this.matchSound = new Audio('Assets/Audio/match.wav');
		this.VictorySound = new Audio('Assets/Audio/victory.wav');
		this.gameOver = new Audio('Assets/Audio/gameOver.wav');
		this.bgMusic.volume = 0.5;
		this.bgMusic.loop = true;
	}
	startMusic() {
		this.bgMusic.play();
	}
	stopMusic() {
		this.bgMusic.pause();
		this.bgMusic.currentTime = 0;
	}
	flip(){
		this.flipSound.play();
	}
	match() {
		this.matchSound.play();
	}
	Victory() {
		this.stopMusic();
		this.VictorySound.play();
	}
	gameOver() {
		this.stopMusic();
		this.gameOverSound.play();
	}
}

class MixOrMatch {
	constructor(totalTime, cards) {
		this.cardsArray = cards;
		this.totalTime = totalTime;
		this.timeRemaining = totalTime;
		this.timer = document.getElementById('time-remaining')
		this.ticker = document.getElementById(flips);
		this.AudioController = new AudioController();
	}

	startGame() {
		this.totalClicks = 0;
		thus.timeRemaining = this.totalTime;
		this.cardToCheck = null;
		this.matchedCards = [];
		this.busy = true;
		setTimeout (() => {
			this.AudioController.startMusic();
			this.shuffleCards(this.cardsArray);
			this.countdown = this.startCountdown();
			this.busy = false;
		}, 500)
	}
}