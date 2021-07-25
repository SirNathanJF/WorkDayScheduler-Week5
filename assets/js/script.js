const presentDay = moment();

$("#currentDay").text(presentDay.format("dddd, MMMM Do"));

$(".container").on("click", ".saveBtn", sendToLocalStorage);

for(let eventText = 9; eventText <= 17; eventText++){
    let schedule = localStorage.getItem("hour" + eventText);
    $(`#hour${eventText}`).text(schedule);

    if($(`#hour${eventText}`).text() == null){
        $(`#hour${eventText}`).text().empty();
    }
};

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

function sendToLocalStorage(event){
    event.preventDefault();

    let timeClicked = $(this).parent("section").children("textarea").data("time");
    let savedEvent = $(this).parent("section").children("textarea").val();

    localStorage.setItem("hour" + timeClicked, savedEvent);
};