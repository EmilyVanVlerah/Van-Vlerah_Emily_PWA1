/**
 * Created by the JavaScript Development Team
 * Name: Emily Van Vlerah
 * Date: March 24th, 2014
 * Class: PWA
 * Goal: Goal7
 */

(function(){

    window.Person = Person;

    var Person.jobs = ["coder","cop","student","Pharmacy Tech."];//using Math.random() method

    var Person.actions = ["sleeping","eating","working"];//using Math.random() method

    function runUpdate(){

        people.forEach(function(element){


            element.update(setInterval(runUpdate, 1000 / 30););


        });



})();  // end wrapper

