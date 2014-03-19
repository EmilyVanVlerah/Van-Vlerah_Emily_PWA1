/*

    Name: Emily Van Vlerah
    Date: March 18th, 2014

	* Mid Terms for PWA-1
*/

var students = [{name: 'jbond', address:{address:"3300 University Blvd", city: "Winter Park", state: "Fl"}, GPA: [2.5, 3.5, 4.0]},
                {name: 'msanders', address:{address:"3300 University Blvd", city: "Winter Park", state: "Fl"}, GPA: [2.5, 3.5, 4.0]}];


//Student 1
//for(var=0; i<array.length; i++){console.log()};
console.log('Name: ',students[0].name);
console.log('Address:',students[0].address['address'],students[0].address['city'],students[0].address['state']);
console.log('GPA: ',students[0].GPA.toString());

//Student2
console.log('Name: ',students[1].name);
console.log('Address:',students[1].address['address'],students[1].address['city'],students[1].address['state']);
console.log('GPA: ',students[1].GPA.toString());


students.push({name: 'jtuttle', address:{address:"3300 University Blvd", city: "Winter Park", state: "Fl"}, GPA: [2.5, 3.5, 4.0]});

//skipping console.log

