/**
 * Created by the JavaScript Development Team
 * Name: Emily Van Vlerah
 * Date: March 25th, 2014
 * Class: PWA1
 * Goal: Goal7
 */


//person.js
window.Person = Person;

//CONSTRUCTOR
var Person = function(name, row){

    //FOUR PROPERTIES
    this.name = name;
    this.row = row;
    var jobs = ["Coder","Police","Student","Doctor"];
    var actions = ["sleeping","eating","working"];
    var x = Math.floor(Math.random()*jobs.length);
    var y = Math.floor(Math.random()*actions.length);
    this.job = jobs[x];
    this.action = actions[y];

    this.update = function(){
        var y = Math.floor(Math.random()*actions.length);
        this.action = actions[y];
    }

};
