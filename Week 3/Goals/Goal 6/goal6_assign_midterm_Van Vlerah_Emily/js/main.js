/*

    Name: Emily Van Vlerah
    Date: March 22th, 2014

	* Mid Terms for PWA-1
*/
(function(){ // START - SELF-EXECUTING FUNCTION



    var date = new Date();
    var index = 0;


    console.log('------ ORIGINAL Objects ----------');

    var students =  [
        {
            name: "James Bond",
            address : {
                address : "3300 University Blvd",
                city    : "Winter Park",
                state   : "Florida"
            },
            gpa : [2.5, 2.4, 3.3]
        },
        {
            name: "Justin Goldman",
            address : {
                address : "4600 E Kentucky Ave",
                city    : "Denver",
                state   : "Colorado"
            },
            gpa : [2.4, 3.1, 3.4]
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

    addData('super man', '123 Test Dr', 'Orlando', 'Florida', [3.2, 4.0, 2.2] );




    console.log('------ ADDED Object ----------');


    console.log("Students Name: ", students[2].name);
    console.log("Students Address: ", students[2].address.address + "   " + students[2].address.city + ", "  + students[2].address.state);
    console.log("Students GPA: ", students[2].gpa);
    console.log("Students Date: ", date.toLocaleDateString());


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
            //var innerAvg = document.getElementById('gpaavg');


            //console.log(innerName);

            innerName.innerHTML = 'Name: ' + students[index].name;
            innerAddress.innerHTML = 'Address: ' + students[index].address.address + ", " + students[index].address.city + ", " + students[index].address.state;
            innerGpa.innerHTML = 'GPA: ' + students[index].gpa;
            innerDate.innerHTML = 'Date: ' + innerDate2;
            //innerAvg.innerHTML = 'Average GPA: ';
            index++;


        }else{

            return false;
        }

    };













})(); //END - SELF EXECUTING FUNCTION