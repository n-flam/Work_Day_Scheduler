// load time into the dom


setInterval(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

}, 1000);


// Declatring var/const
const planWorkday = [
    {time : "9am", event: "" },
    {time : "10am", event: "" },
    {time : "11am", event: "" },
    {time : "12pm", event: "" },
    {time : "1m", event: "" },
    {time : "2pm", event: "" },
    {time : "3pm", event: "" },
    {time : "4pm", event: "" },
    {time : "5pm", event: "" },
];


// set up table
// shouldn't create the timetable via raw html
planWorkday.forEach(function(timeBlock, index) {
	var timeLabel = timeBlock.time;
	var blockColor = colorRow(timeLabel);
	var row =
		'<div class="time-block" id="' +
		index +
		'"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
		timeLabel +
		'</div><textarea class="form-control ' +
		blockColor +
		'">' +
		timeBlock.event +
		'</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

	/* Adding rows to container div */
	$(".container").append(row);
});






// for loop 
for (let index = 0; index < times.length; index++) {
    const time = times[index];
    // in each loop we create a time row

    // each row would have the time
    // textarea
    // button

    // attacj event listner
    // Todo: const button;

    $(button).on('click', function(event){
        event.preventDeault();

        // identify which row

        $(event.target).parent()


        // row
        // Todo: const row;
        // const time = row.firstChild().text()

        // i want to get the value of textarea
        // data = row.secondChild().firstChild().val()
        // TODO: 

        // FIXME: 
        localStorage.setItem('data-row-' + time, data)

    });


    // create a data attr on the row
    // data-row-time 
    // so we can identify each row
    // and create a unique key in local storage



}