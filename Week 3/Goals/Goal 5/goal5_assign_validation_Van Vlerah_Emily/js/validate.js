/*
    Name: Emily Van Vlerah
    Date: March 20th, 2014

     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        var input_uname = document.querySelector('#f_username');
        var input_email = document.querySelector('#f_email');
        var input_phone = document.querySelector('#f_phone');
        var input_password = document.querySelector('#f_password');
        var input_ssn = document.querySelector('#f_ssn');


        validateField(input_uname);  //id = is the form input field ID
        validateField(input_email);
        validateField(input_phone);
        validateField(input_password);
        validateField(input_ssn);


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

       // if (inputName.name === 'id name goes here'){
            //var pattern = 'a RegEx pattern goes here'

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.

       if(inputName.name === 'f_username'){
            var pattern = 'a RegEx pattern goes here'
       }else if(inputName.name === 'f_email'){
            var pattern = 'a RegEx pattern goes here'
       }else if(inputName.name === 'f_phone'){
            var pattern = 'a RegEx pattern goes here'
       }else if(inputName.name === 'f_ssn'){
            var pattern = 'a RegEx pattern goes here'
       }else if(inputName.name === 'f_password'){
            var pattern = 'a RegEx pattern goes here'
       }


        //};

        var pass = validateField();
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    };

})();  // end wrapper



