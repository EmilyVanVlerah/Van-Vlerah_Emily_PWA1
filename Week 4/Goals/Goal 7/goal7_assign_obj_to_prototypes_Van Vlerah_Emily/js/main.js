/**
 * Created by the JavaScript Development Team
 * Name: Emily Van Vlerah
 * Date: March 25th,2014
 * Class: PWA1
 * Goal: Goal7
 */


///ARRAY OF FIVE NAMES
var names = ["Emily", "Bob", "Mark", "Jeff", "Virginia"];
var people = [];

var chosennames = [];
var interval;
//var numOfPeople = 3;


//console.log(randomNumber);

//FOR LOOP


while (people.length<3){
    if(people.length==0){
        var randomName = Math.floor(Math.random()*5);
        var person = new Person(names[randomName], people.length);
        chosennames.push(names[randomName]);
        people.push(person);
    }
    else{
        var randomName = Math.floor(Math.random()*5);
        var flag = false;
        var l = chosennames.length;
        while(l--){
            if(names[randomName] == chosennames[l]){ flag=true; }
        }
        if(flag){ /* don't do anything*/ }
        else{
            var person = new Person(names[randomName], people.length);
            chosennames.push(names[randomName]);
            people.push(person);
        }
    }

}

console.log(people);

var populateHTML = function(data, field){

    var id = document.getElementById(field);
    id.innerHTML = data;

};


function runUpdate(){
    for(i=0;i<people.length;i++){
        people[i].update();
        populateHTML(people[i].name,"r"+(i+1)+"c1");
        populateHTML(people[i].job,"r"+(i+1)+"c2");
        populateHTML(people[i].action,"r"+(i+1)+"c3");
    }
}
runUpdate();
clearInterval(interval);
interval = setInterval(runUpdate, 5000);
//populateHTML();