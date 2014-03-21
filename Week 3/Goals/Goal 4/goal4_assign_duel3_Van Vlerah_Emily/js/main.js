/*
 Name: Emily Van Vlerah
 Date: March 17th, 2014

 Assignment: Goal 4 - Duel Fight Game

 */

(function () {

    console.log("FIGHT!!!");

    //dom pieces
    var fighter1_txt = document.querySelector("#kratos").querySelector("p");
    var fighter2_txt = document.querySelector("#kabal").querySelector("p");
    var round_txt = document.querySelector("h4");
    var button = document.getElementById("fight_btn");

    // var fighter1 = ["Spiderman", 20, 100];
    // var fighter2 = ["Batman", 20, 100];
    //fighter1 = {name:'Spiderman', damage:20, health:100};
    //fighter2 = {name:'Batman', damage:20, health:100};

    //new object of arrays, this way you have 1 object this will have more dynamic
    var fighters = [
        {
            name:"Spiderman",
            damage:20,
            health:100
        },
        {
            name:"Batman",
            damage:20,
            health:100
        }];

    //click action for button
    button.onclick = fight;

    var round = 1;

    //init HTML text
    round_txt.innerHTML = "Click To Start Fight";
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

    function fight(){
        console.log("in the fight function");

        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
        //var fight = document.querySelectorAll('#body');

        // for(var i= 0, max=fight.length; i<max; i++){
        //     var score = fight[i].firstChild.getAttribute("#div id");
        //     console.log('this is a test: ',score);

        //     if(score === 'kabal'){
        //         var output = fight[i].firstChild;
        //         console.log(output);

        //         output.setAttribute(fighters[0].name, fighters[0].health);
        //     }else if(score === 'kratos'){
        //         var output2 = fight[i].firstChild.nextSibling;
        //         console.log(output2);

        //         output2.setAttribute(fighters[0].name, fighters[0].health);
        //     }
        // }





        //alert(fighter1[0] + ":" + fighter1[2] + " *START* " + fighter2[0] + ":" + fighter2[2]);
        //alert(fighter1.name + ":" + fighter1.health + " *START* " + fighter2.name + ":" + fighter2.health);

        //for (var i = 0; i < 10; i++) {
        //Math.floor(Math.random() * (max - min) + min);
        //};
        //var minDamage1 = playerOne[1] * .5;
        var minDamage1 = fighters[0].damage * .5;
        //var minDamage2 = playerTwo[1] * .5;
        var minDamage2 = fighters[1].damage * .5;

        // var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1) + minDamage1);
        // var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2) + minDamage2);
        var f1 = Math.floor(Math.random()*(fighters[0].damage-minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random()*(fighters[1].damage-minDamage2) + minDamage2);

        //fighter1[2]-=f1;
        //fighter2[2]-=f2;
        fighters[0].health-=f1;
        fighters[1].health-=f2;



        //check for victor - this does all the innerHTML replacing and also disables the button
        var result = winnerCheck();
        console.log(result);

        round_txt.innerHTML = "ROUND " + round + " complete";
        round++;
        if (result === "no winner")
        {
            fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;


        } else{
            fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML = "";

            button.onclick = "null";

            document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
        }





        //console.log(fighter1[0] + ":" + fighter1[2] + "*START*" + fighter2[0] + ":" + fighter2[2]);
        console.log(fighters[0].name + ":" + fighters[0].health + "*START*" + fighters[1].name + ":" + fighters[1].health);

        //var results = winnerCheck();
        //console.log(results);

        /*if (results === "no winner") {
         round++;
         //alert(fighter1[0] + ":" + fighter1[2] + " *ROUND " + round + " OVER* " + fighter2[0] + ":" + fighter2[2]);
         //alert(fighter1.name + ":" + fighter1.health + " *ROUND " + round + " OVER* " + fighter2.name + ":" + fighter2.health);

         }else{
         //alert(results);
         break;
         }*/

        // document.querySelector('#body div id a');
        // var button = function(e){
        //     document.addEventListener('click', button, false);
        //     e.preventDefault();
        //     return false;
        // };



    }

    function winnerCheck(){ //updated winnerCheck with the new object arrays

        console.log('in winnerCheck FN');

        var result = "no winner";

        /*  if (fighter1[2]<1 && fighter2[2]<1) {
         result = "You Both Die";
         }else if (fighter1[2]<1) {
         result = fighter2[0]+ "WINS!!!";
         }else if (fighter2[2]<1) {
         result = fighter1[0]+ "WINS!!!"
         };*/

        if (fighters[0].health<1 && fighters[1].health<1) {
            result = "You Both Die";
        }else if (fighters[0].health<1) {
            result = fighters[1].name+ "WINS!!!";
        }else if (fighters[1].health<1) {
            result = fighters[0].name+ "WINS!!!"
        };
        return result;
        fight();
    };



    console.log("program starts");


})();




















