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

/*

 var display = function(e){
    var counter = 0;
    for (var i = 0; i <students.length; i++){
        counter++;
        var name = students[i].name;
        var address =
        var gpa =
    };
    for (var ii = 0; ii < ?.length; ii++){
        setters for innerHTML for each variable

    };

 };

 element.addEventListener(‘click’, display, false);


 var numAvg = function(arr2){
 var avgArr = 0;
 for(i=0, j=arr2.length; i<j; i++){
 avgArr += arr2[i];
 };
 avgArr /= j;
 return avgArr;
 };
 console.log("The average number is " + numAvg([10, 20, 30, 20, 10, 20]));

 */

