/*
Name: Emily Van Vlerah
Date: March 17th, 2014

Assignment: Goal 4 - Duel Fight Game

*/

(function () {

	console.log("FIGHT!!!");

   // var fighter1 = ["Spiderman", 20, 100];
   // var fighter2 = ["Batman", 20, 100];
    fighter1 = {name:'Spiderman', damage:20, health:100};
    fighter2 = {name:'Batman', damage:20, health:100};


	var round = 0;

	function fight(){
		console.log("in the fight function");

		//alert(fighter1[0] + ":" + fighter1[2] + " *START* " + fighter2[0] + ":" + fighter2[2]);
       // alert(fighter1.name + ":" + fighter1.health + " *START* " + fighter2.name + ":" + fighter2.health);

		//for (var i = 0; i < 10; i++) {
			//Math.floor(Math.random() * (max - min) + min);
        //};
            //var minDamage1 = playerOne[1] * .5;
            var minDamage1 = fighter1.damage * .5;
            //var minDamage2 = playerTwo[1] * .5;
            var minDamage2 = fighter2.damage * .5;

           // var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1) + minDamage1);
           // var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2) + minDamage2);
			var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2) + minDamage2);

            //fighter1[2]-=f1;
            //fighter2[2]-=f2;
			fighter1.health-=f1;
			fighter2.health-=f2;

			//console.log(fighter1[0] + ":" + fighter1[2] + "*START*" + fighter2[0] + ":" + fighter2[2]);
            console.log(fighter1.name + ":" + fighter1.health + "*START*" + fighter2.name + ":" + fighter2.health);

			var results = winnerCheck();
			console.log(results);

			if (results === "no winner") {
				round++;
				//alert(fighter1[0] + ":" + fighter1[2] + " *ROUND " + round + " OVER* " + fighter2[0] + ":" + fighter2[2]);
                //alert(fighter1.name + ":" + fighter1.health + " *ROUND " + round + " OVER* " + fighter2.name + ":" + fighter2.health);

			}else{
				//alert(results);
				break;
			}


		
	}

	function winnerCheck(){

		var result = "no winner";

      /*  if (fighter1[2]<1 && fighter2[2]<1) {
            result = "You Both Die";
        }else if (fighter1[2]<1) {
            result = fighter2[0]+ "WINS!!!";
        }else if (fighter2[2]<1) {
            result = fighter1[0]+ "WINS!!!"
        };*/

		if (fighter1.health<1 && fighter2.health<1) {
			result = "You Both Die";
		}else if (fighter1.health<1) {
			result = fighter2.name+ "WINS!!!";
		}else if (fighter2.health<1) {
			result = fighter1.name+ "WINS!!!"
		};
		return result;
	};


	console.log("program starts");
	fight();

})();




















