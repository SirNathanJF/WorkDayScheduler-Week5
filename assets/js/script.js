const presentDay = moment();

$("#currentDay").text(presentDay.format("dddd, MMMM Do"));

$(".container").on("click", ".saveBtn", sendToLocalStorage);