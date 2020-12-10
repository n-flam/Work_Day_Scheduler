//  Declare Variables
// var today = moment().format("dddd, MMMM Do");
var now = moment().format("H A");



// load time into the dom
setInterval(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

}, 1000);


// set up table
// shouldn't create the timetable via raw html
const times = ["9am", '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
// for loop 
for (let i = 0; i < times.length; i++) {
    const time = times[i];
    
  
    // in each loop we create a time row
    

    // each row would have the time
    // textarea
    // button

    // attacj event listner
    // const button;
    $("button").click(function() {
        value = $(this).siblings("textarea").val();
        hourString = $(this).siblings("div").text();
        
        saveSchedule(hourString, value);
      });




}

