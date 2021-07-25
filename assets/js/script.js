const presentDay = moment();

$("#currentDay").text(presentDay.format("dddd, MMMM Do"));

$(".container").on("click", ".saveBtn", sendToLocalStorage);

for(let eventText = 9; eventText <= 17; eventText++){
    let schedule = localStorage.getItem("hour" + eventText);
    $("#hour${eventText}").text(schedule);

    if($("#hour${eventText}").text() == null){
        $("#hour${eventText}").text().empty();
    }
};

