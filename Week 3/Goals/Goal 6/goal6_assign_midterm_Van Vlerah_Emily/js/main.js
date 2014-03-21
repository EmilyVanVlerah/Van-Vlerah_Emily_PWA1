/*

    Name: Emily Van Vlerah
    Date: March 18th, 2014

	* Mid Terms for PWA-1
*/
var students = [{name: 'jbond', address:{address: '3300 University Blvd', city:'Winter Park', state: 'FL'}, gpa: [2.5, 3.5, 4.0]},
    {name: 'msanders', address:{address: '3322 University Street', city:'Orlando', state: 'FL'}, gpa: [2.3, 3.7, 4.0]}];

var index = 0;

console.log('Name: ',students[0].name);
console.log('Address: ',students[0].address['address'],students[0].address['city'],students[0].address['state'] );
console.log('GPA: ',students[0].gpa.toString());

console.log('Name: ',students[1].name);
console.log('Address: ',students[1].address['address'],students[1].address['city'],students[1].address['state'] );
console.log('GPA: ',students[1].gpa.toString());

students.push({name: 'mmouse', address:{address: '1234 Sussex Ave', city:'Magic', state: 'MA'}, gpa: [2.0, 3.2, 4.0]});

function display(){


    if(index <students.length){
        var innerName = document.getElementById("name");
        var innerAddress = document.getElementById("address");
        var gpa = document.getElementById("gpa");
        //console.log(innerName);

        innerName.innerHTML = 'Name: ' + students[index].name;
        innerAddress.innerHTML = 'Address: ' + students[index].address.address + " " + students[index].address.city + " " + students[index].address.state;
    }
    return false;


};



var button = document.getElementsByClassName('buttonred');

//var button = "TEST";


//button[0].onclick = display();

button[0].addEventListener('click', display, false);
