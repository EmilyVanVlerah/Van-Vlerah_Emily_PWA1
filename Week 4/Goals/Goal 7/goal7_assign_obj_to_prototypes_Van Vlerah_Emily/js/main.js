/**
 * Created by the JavaScript Development Team
 * Name: Emily Van Vlerah
 * Date: March 25th,2014
 * Class: PWA1
 * Goal: Goal7
 */

(function(){

    var names = ["Emily", "Bob", "Virginia", "Jeff", "Mark"];
    var people = [];
    var interval;
    var peopleNumber = 3;


    for (var i = 0; i < peopleNumber; i++){
        var randomPerson = Math.floor(Math.random()*names.length);
        var person = new Person(names[randomPerson], i+1);

        populateHTML(person.names,"r"+(i+1)+"c1");
        populateHTML(person.jobs,"r"+(i+1)+"c2");

        people.push(person);
        names.splice(randomPerson,1);



    }
    clearInterval(interval);

    interval = setInterval(runUpdate, 1000 / 30);


    var populateHTML = function(data, field){

        var id = document.getElementById(field);
        id.innerHTML = data;

    };



    function runUpdate(){

        people.forEach(function(element){
            //console.log(element);
            //element = the items in the people array
            element.update();


        });

    }

})();