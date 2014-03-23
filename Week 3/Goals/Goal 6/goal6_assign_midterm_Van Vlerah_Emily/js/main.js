/*

    Name: Emily Van Vlerah
    Date: March 22th, 2014

	* Mid Terms for PWA-1
*/
(function(){ // START - SELF-EXECUTING FUNCTION

    function gpaAvg(gpaArray){
        var total = 0;
        for(i=0;i<gpaArray.length;i++){
            total += gpaArray[i];
        }
        total = total / gpaArray.length;
        return Math.round(total * 100) / 100;//Extra Credit Round of Average GPA
    }


    var date = new Date();
    var index = 0;


    console.log('------ ORIGINAL Objects ----------');

    var students =  [
        {
            name: "Mark Sanders",
            address : {
                address : "3300 University Blvd",
                city    : "Winter Park",
                state   : "FL"
            },
            gpa : [2.1, 2.4, 3.0]
        },
        {
            name: "Emily Van Vlerah",
            address : {
                address : "125 Sussex Drive Apt 2",
                city    : "Athens",
                state   : "GA"
            },
            gpa : [4.0, 3.6, 3.4]
        }];



    //CONSOLE OF ORIGINAL OBJECTS
    for(var i = 0; i<students.length; i++){

        console.log('Name: ',students[i].name);
        console.log('Address: ',students[i].address['address'] + ', ',students[i].address['city'] + ', ',students[i].address['state']);
        console.log('GPA: ',students[i].gpa.toString());
        console.log('Date: ', date.toLocaleDateString());

    };


    //FUNCTION FOR NEW ARRAY
    var addData = function(name, address, city, state, GPA){

        var newStudent = {
            name    : name,
            address : {
                address : address,
                city    : city,
                state   : state
            },
            gpa     : GPA
        };


        //PUSH NEW ARRAY
        students.push(newStudent);
    };

    //CREATE DATA FOR NEW ARRAY

    addData('Buggs Bunny', '5566 Magic Stuff', 'Torgue', 'MA', [3.2, 1.0, 2.2]);




    console.log('------ ADDED Object ----------');


    console.log("Name: ", students[2].name);
    console.log("Address: ", students[2].address.address + "   " + students[2].address.city + ", "  + students[2].address.state);
    console.log("GPA: ", students[2].gpa);
    console.log("Date: ", date.toLocaleDateString());


    //ONCLICK - EVENT


    console.log(students);


    document.getElementsByClassName('buttonred')[0].onclick = function(e){


        display();


        e.preventDefault();
        return false;
    };



    function display(){


        if(index < students.length){


            var innerName = document.getElementById("name");
            var innerAddress = document.getElementById("address");
            var innerGpa = document.getElementById("gpa");
            var innerDate = document.getElementById('date');
            var innerDate2 = date.toLocaleDateString();
            var innerAvg = document.getElementById('gpaavg');

            var gpaAvgVal = gpaAvg(students[index].gpa);
            //console.log(innerName);

            innerName.innerHTML = 'Name: ' + students[index].name;
            innerAddress.innerHTML = 'Address: ' + students[index].address.address + ", " + students[index].address.city + ", " + students[index].address.state;
            innerGpa.innerHTML = 'GPA: ' + students[index].gpa;
            innerDate.innerHTML = 'Date: ' + innerDate2;
            innerAvg.innerHTML = 'Average GPA: '+gpaAvgVal;
            index++;


        }else{

            document.getElementsByClassName('buttonred')[0].innerHTML = 'DONE!!!';

            return false;
        }

    };



    display();








})(); //END - SELF EXECUTING FUNCTION