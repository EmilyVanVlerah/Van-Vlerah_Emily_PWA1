/*
Name: Emily Van Vlerah
Date: March 5th, 2014

Assignment: Goal 1 - Duel Fight Game
Part 1 of 3
*/

(function () {

	console.log("FIGHT!!!");

	var fighter1 = ["Spiderman", 20, 100];
	var fighter2 = ["Batman", 20, 100];


	var round = 0;

	function fight(){
		console.log("in the fight function");

		alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);

		for (var i = 0; i < 10; i++) {
			//Math.floor(Math.random() * (max - min) + min);

			var minDamage1 = player1Damage * .5;
			var minDamage2 = player2Damage * .5;

			var f1 = Math.floor(Math.random()*(player1Damage-minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random()*(player2Damage-minDamage2) + minDamage2);

			playerOneHealth-=f1;
			playerTwoHealth-=f2;

			console.log(playerOneName + ":" + playerOneHealth + "*START*" + playerTwoName + ":" + playerTwoHealth);

			var results = winnerCheck();
			console.log(results);

			if (results === "no winner") {
				round++;
				alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);

			}else{
				alert(results);
				break;
			};
		};

		
	};

	function winnerCheck(){

		var result = "no winner";

		if (playerOneHealth<1 && playerTwoHealth<1) {
			result = "You Both Die";
		}else if (playerOneHealth<1) {
			result = playerTwoName+ "WINS!!!";
		}else if (playerTwoHealth<1) {
			result = playerOneName+ "WINS!!!"
		};
		return result;
	};


	console.log("program starts");
	fight();

})();




















