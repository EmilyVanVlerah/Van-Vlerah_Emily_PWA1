/**
 * Created by Emily Van Vlerah on 3/26/14.
 */


var Student = function(newname, newstreet, newcity, newstate, newgpa, newdate){

    this.name = newname;
    this.address = {};
    this.address.street = newstreet;
    this.address.city = newcity;
    this.address.state = newstate;
    this.gpa = newgpa;
    this.date = newdate;
};


Student.prototype.gpaAvg = function(){

    console.log(this.gpa);
    var myAry = this.gpa;
    var gradeAvg = 0;

    for (var i = 0, max = myAry.length; i < max; i++){
        gradeAvg += myAry[i];
    };

    var num = gradeAvg/max;
    return num.toFixed(2);
};