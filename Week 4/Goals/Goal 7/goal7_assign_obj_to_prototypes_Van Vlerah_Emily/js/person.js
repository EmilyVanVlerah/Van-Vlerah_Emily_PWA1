/**
 * Created by the JavaScript Development Team
 * Name: Emily Van Vlerah
 * Date: March 25th, 2014
 * Class: PWA1
 * Goal: Goal7
 */


window.Person = Person;

    Person.jobs = ["teacher","farmer","student","pilot"];
    Person.actions = ["sleeping","eating","working"];


var Person = function(names,row){


    this.names = names;
    this.actions = Math.floor(Math.random()*Person.actions.length);
    this.jobs = jobs;
    this.row = row;




};


console.log(this.action);
