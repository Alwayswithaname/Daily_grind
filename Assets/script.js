$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

function timeBlockColor() {
    var hour = moment().hours();
    
    $(".time-block").each(function(){
        var currentHour = parseInt($(this).attr("id"));
        console.log('currentHour', currentHour);

        if (currentHour > hour) {
                $(this).addClass("future");
        } else if (currentHour == hour) {
                $(this).addClass("present");
        } else {
                $(this).addClass("past");
        }
    })
};


var saveBtn = $('.saveBtn')

timeBlockColor()