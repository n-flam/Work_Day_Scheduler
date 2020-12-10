
$(document).ready(function() {

 
    // variables and array
    let hours = ["hour8", "hour9", "hour10", "hour11","hour12", "hour13", "hour14","hour15", "hour16", "hour17"];
    let toDo = ["#to-do8", "#to-do9", "#to-do10","#to-d11", "#to-do12", "#to-do13","#to-do14", "#to-do15", "#to-do16", "#to-do17"];
    let times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  
    // moment.js date/time request
    var update = function() {
      document.getElementById("currentDay")
      .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000);
   
    // toDo:
    // <div class="container">             
    //     <div class="row" id="hour-eight">
    //         <div class="col-sm-1" id="hour8">
    //           8:00 AM
    //         </div>
    //             <input type="text" class="form-control col-sm-10" id="to-do8">
    //             <button type="button" class="btn btn-primary savebtn"><i class="far fa-calendar-alt"></i></button>
    //     </div>
  
  
  
    // Get save button to add textarea text to local storage
    $(".savebtn").on("click", function() {
      
      let textarea = $(this).siblings(".form-control").val();
      let hour = $(this).siblings().attr("id");
  
      localStorage.setItem(hour, textarea);
    });
  
   // Setting textarea area for each hour to local storage
    for (let i = 0; i<hours.length; i++) {
      $(toDo[i]).val(localStorage.getItem(hours[i]));
    };
   
    // simplify code for color coding 
    // for (let x = 0; i < times.length; x++) {
      
      // };
      
      // Color coding present, past, and future hours
    if ((moment().format("H")) > 8 ) {
      $(hour8).css("background-color", "#b6b6b6");
    } else if ((moment().format("H")) < 8) {
      $(hour8).css("background-color", "#77dd77");
    } else if ((moment().format("H")) == 8) {
      $(hour8).css("background-color", "#ff6961");
    } else {
      alert('Error');
    }
  
  
    if ((moment().format("H")) > 9) {
      $(hour9).css("background-color", "#b6b6b6");
    } else if ((moment().format("H")) < 9) {
      $(hour9).css("background-color", "#77dd77");
    } else if ((moment().format("H")) == 9) {
      $(hour9).css("background-color", "#ff6961");
    } else {
      alert('Error');
    }
  
  
    if ((moment().format("H")) > 10) {
      $(hour10).css("background-color", "#b6b6b6");
    } else if ((moment().format("H")) < 10) {
      $(hour10).css("background-color", "#77dd77");
    } else if ((moment().format("H")) == 10) {
      $(hour10).css("background-color", "#ff6961");
    } else {
      alert('Error');
    }
  
  
    if ((moment().format("H")) > 11) {
      $(hour11).css("background-color", "#b6b6b6");
    } else if ((moment().format("H")) < 11) {
      $(hour11).css("background-color", "#77dd77");
    } else if ((moment().format("H")) == 11) {
      $(hour11).css("background-color", "#ff6961");
    } else {
      alert('Error');
    }
  
  
    if ((moment().format("H")) > 12) {
      $(hour12).css("background-color", "#b6b6b6");
    } else if ((moment().format("H")) < 12) {
      $(hour12).css("background-color", "#77dd77");
    } else if ((moment().format("H")) == 12) {
      $(hour12).css("background-color", "#ff6961");
    } else {
      alert('Error');
    }
  
  
    if ((moment().format("H")) > 13) {
      $(hour13).css("background-color", "#b6b6b6");
    } else if ((moment().format("H")) < 13) {
      $(hour13).css("background-color", "#77dd77");
    } else if ((moment().format("H")) == 13) {
      $(hour13).css("background-color", "#ff6961");
    } else {
      alert('Error');
    }
  
  
    if ((moment().format("H")) > 14) {
      $(hour14).css("background-color", "#b6b6b6");
    } else if ((moment().format("H")) < 14) {
      $(hour14).css("background-color", "#77dd77");
    } else if ((moment().format("H")) == 14) {
      $(hour14).css("background-color", "#ff6961");
    } else {
      alert('Error');
    }
  
  
    if ((moment().format("H")) > 15) {
      $(hour15).css("background-color", "#b6b6b6");
    } else if ((moment().format("H")) < 15) {
      $(hour15).css("background-color", "#77dd77");
    } else if ((moment().format("H")) == 15) {
      $(hour15).css("background-color", "#ff6961");
    } else {
      alert('Error');
    }
  
  
    if ((moment().format("H")) > 16) {
      $(hour16).css("background-color", "#b6b6b6");
    } else if ((moment().format("H")) < 16) {
      $(hour16).css("background-color", "#77dd77");
    } else if ((moment().format("H")) == 16) {
      $(hour16).css("background-color", "#ff6961");
    } else {
      alert('Error');
    }
  
  
    if ((moment().format("H")) > 17) {
      $(hour17).css("background-color", "#b6b6b6");
    } else if ((moment().format("H")) < 17) {
      $(hour17).css("background-color", "#77dd77");
    } else if ((moment().format("H")) == 17) {
      $(hour17).css("background-color", "#ff6961");
    } else {
      alert('Error');
    }
  
  
  })