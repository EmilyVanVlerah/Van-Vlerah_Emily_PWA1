/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        var info = document.querySelector('#f_username', '#f_email', '#f_phone', '#f_ssn', '#f_password');


        validateField(id);  //id = is the form input field ID


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

        var pass = 'the RegEx .test statement is needed here';
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
        };
    };

})();  // end wrapper



