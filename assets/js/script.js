// Sets a variable to use moment.js for times
const presentDay = moment();
// Edits the format of the date currentDay class
$("#currentDay").text(presentDay.format("dddd, MMMM Do"));
// Sets up the on click event listener, and calls function sendToLocalStorage
$(".container").on("click", ".saveBtn", sendToLocalStorage);
// This sets up the script to get the information from local storage for each hour and populate the information on reload of page. 
for(let eventText = 9; eventText <= 17; eventText++){
    let schedule = localStorage.getItem("hour" + eventText);
    $(`#hour${eventText}`).text(schedule);
    // Added so that the text would be blank if empty, I recieved an error in the console otherwise
    if($(`#hour${eventText}`).text() == null){
        $(`#hour${eventText}`).text().empty();
    }
};
// This next section sets the formatting for the time from moment.js and using jQuery allows us to edit the classes of the HTML so that the color styling will be correct for past, present, and future hour blocks. 
for (let hourIndex = 9; hourIndex <= 17; hourIndex++){
    const presentTime = $(`#hour${hourIndex}`).data("time")

    if(parseInt(presentDay.format("H")) > presentTime){
        $(`#hour${hourIndex}`).addClass("past");

    } else if(parseInt(presentDay.format("H")) == presentTime){
        $(`#hour${hourIndex}`).addClass("present");

    } else{
        $(`#hour${hourIndex}`).addClass("future");
    }
};
// Function to send the hour and text information to local storage. Takes use of jQuery items to tell what hour was clicked and populated.
function sendToLocalStorage(event){
    event.preventDefault();

    let timeClicked = $(this).parent("section").children("textarea").data("time");
    let savedEvent = $(this).parent("section").children("textarea").val();

    localStorage.setItem("hour" + timeClicked, savedEvent);
};