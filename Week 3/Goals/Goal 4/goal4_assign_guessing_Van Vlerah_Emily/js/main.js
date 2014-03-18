/*
 * GUESSING GAME:
 *
 * Created By: Emily Van Vlerah
 * Date: March 18th, 2014
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

    var rand = (Math.floor(Math.random() * 10 + 1));
        console.log(rand);

    var dom = {
        input: document.querySelector('#input'),
        output: document.querySelector('#output'),
        button: document.querySelector('button')
    };

    var validateInput = function(){
        playersGuess = parseInt(dom.input.value);

        if(isNaN(playersGuess)){

        }
    };




})();