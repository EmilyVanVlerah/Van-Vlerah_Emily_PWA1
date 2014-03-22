/*

    Name: Emily Van Vlerah
    Date: March 18th, 2014

	* Mid Terms for PWA-1
*/

var students = [{name: 'jbond', address:{address: '3300 University Blvd', city:'Winter Park', state: 'FL'}, gpa: [2.5,3.5,4.0]},
    {name: 'msanders', address:{address: '3322 University Street', city:'Orlando', state: 'FL'}, gpa: [2.3,3.7,4.0]}];

var index = [0];


/*
var gpaAvg = function(students){
    var count = 0;
    var total = 0;

    for (var i = 0, j = students.gpa.length; i < j; i++){
        count++;
        total = total + students.gpa[i]["GPA"];
    }

    return total/count;

};
console.log("Average GPA:", gpaAvg(students));
*/


var date = new Date();

console.log('-----------First Two Users-----------');

for(var i = 0; i<students.length; i++){

    console.log('Name: ',students[i].name);
    console.log('Address: ',students[i].address['address'] + ', ',students[i].address['city'] + ', ',students[i].address['state'] );
    console.log('GPA: ',students[i].gpa.toString());
    console.log('Date: ', date.toLocaleDateString());

 }

//students.push({name: 'mmouse', address:{address: '1234 Sussex Ave', city:'Magic', state: 'MA'}, gpa: [2.0, 3.2, 4.0]});
students.push({name: 'mmouse', address:{address: '1234 Sussex Ave', city:'Magic', state: 'MA'}, gpa: [2.0,3.2,4.0]});
/*
console.log('----------Three Users----------');

function threeStudents(){

 for(var i = 0; i<students.length; i++){

    console.log('Name: ',students[i].name);
    console.log('Address: ',students[i].address['address'],students[i].address['city'],students[i].address['state'] );
    console.log('GPA: ',students[i].gpa.toString());
    console.log(date.toLocaleDateString());

 }
    return threeStudents();
}

console.log(threeStudents());*/


function display(){


    if(index < students.length){

        index++;

        var innerName = document.getElementById("name");
        var innerAddress = document.getElementById("address");
        var innerGpa = document.getElementById("gpa");
        var innerDate = document.getElementById('date');
        var innerDate2 = date.toLocaleDateString();
        //var innerAvg = document.getElementById('gpaavg');


        //console.log(innerName);

        innerName.innerHTML = 'Name: ' + students[index].name;
        innerAddress.innerHTML = 'Address: ' + students[index].address.address + ", " + students[index].address.city + ", " + students[index].address.state;
        innerGpa.innerHTML = 'GPA: ' + students[index].gpa;
        innerDate.innerHTML = 'Date: ' + innerDate2;
        //innerAvg.innerHTML = 'Average GPA: ';


    }

    return false;


}



var button = document.getElementsByClassName('buttonred');


button[0].addEventListener('click', display, false);

//document.querySelector('buttonred').innerHTML = 'DONE!!!';