/*

    Name: Emily Van Vlerah
    Date: March 22th, 2014

	* Mid Terms for PWA-1
*/


(function(){


    var button = document.getElementsByClassName('buttonred')[0];
    var index = 0;



    var students = [];


    var consoleData = function(){

        for(var i = 0, j = students.length; i< j; i++){

            console.log('Name: ',students[i].name);
            console.log('Address: ',students[i].address['address'] +
                ', ',students[i].address['city'] +
                ', ',students[i].address['state']);

            console.log('GPA: ',students[i].gpa.toString());

            console.log('Date: ' + students[index].date.getMonth() +
                "/" + students[index].date.getDate() +
                "/" + students[index].date.getFullYear());
        }

        return false;
    };


    var displayData = function(){

        console.log(students);

        var innerName = document.getElementById("name");
        var innerAddress = document.getElementById("address");
        var innerGpa = document.getElementById("gpa");
        var innerDate = document.getElementById('date');
        var innerAvgGpa = document.getElementById('gpaavg');


        if(index < students.length){

            innerName.innerHTML = 'Name: ' + students[index].name;
            innerAddress.innerHTML = 'Address: ' + students[index].address.street +
                ", " + students[index].address.city +
                ", " + students[index].address.state;

            innerGpa.innerHTML = 'GPA: ' + students[index].gpa;


            innerDate.innerHTML = 'Date: ' + students[index].date.getMonth() +
                "/" + students[index].date.getDate() +
                "/" + students[index].date.getFullYear();


            var studentObj = students[index];
            console.log(studentObj);
            var avg = studentObj.gpaAvg();


            innerAvgGpa.innerHTML = "Average GPA: " + avg;


            index++;

        }else{

            document.getElementsByClassName('buttonred')[0].innerHTML = 'DONE!!!';
            button.onclick = "return false";
        }
    };


    button.onclick = displayData;


    console.log('------ ORIGINAL Objects ----------');

    students.push(new Student("Mark Sanders", "3300 University Blvd", "Winter Park", "FL", [2.1, 2.4, 3.0], new Date()));

    students.push(new Student("Emily Van Vlerah", "125 Sussex Drive Apt 2", "Athens", "GA", [4.0, 3.6, 3.4], new Date()));

    consoleData();


    students.push(new Student("Buggs Bunny", "5566 Magic Stuff", "Torgue", "MA", [3.2, 1.0, 2.2], new Date()));

    console.log('------ ADDED Objects ----------');

    consoleData();



    displayData();



})();