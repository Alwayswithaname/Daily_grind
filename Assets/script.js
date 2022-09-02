var saveBtn = $('.saveBtn')
// displays time and day
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// looks at time of day and color coats text blocks accordingly
function timeBlockColor() {
    var hour = moment().hours();
    
    $(".time-block").each(function(){
        var currentHour = parseInt($(this).attr("id"));
        console.log('currentHour', currentHour);

        if (currentHour > hour) {
                $(this).addClass("future");
        } else if (currentHour === hour) {
                $(this).addClass("present");
        } else {
                $(this).addClass("past");
        }
    })
};

// on click saves text in selected blocks
saveBtn.on("click", function(){

    var time = $(this).siblings(".hour").text();
    var sched = $(this).siblings(".sched").val();

    localStorage.setItem(time, sched);
});

// grabs saved text from from locoal 
function planner() {

    $(".hour").each(function (){
        var currentHour = $(this).text();
        var schedOtd = localStorage.getItem(currentHour);

        if (schedOtd !== null) {
            $(this).siblings(".sched").val(schedOtd);
        }
    });
}

// calling functions 
timeBlockColor();
planner();