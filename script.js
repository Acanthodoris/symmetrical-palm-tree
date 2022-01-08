
var currentTime = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentTime);

var tableElements = $(".description")

for (let i = 0; i < 9; i++) {
    //create date object with hour to be checked against current time
    var timeSlotHour = (new Date()).setHours(i + 9);
    //check if time
    if (moment().isAfter(timeSlotHour)) {
        tableElements[i].classList.add("past")
    }
    
    else if (moment().isSame(timeSlotHour)) {
        tableElements[i].classList.add("present")
    }

    else {
        tableElements[i].classList.add("future")
    }
    
}