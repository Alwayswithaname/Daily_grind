var saveBtn = $('.saveBtn')

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

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

saveBtn.on("click", function(){

    var time = $(this).siblings(".hour").text();
    var sched = $(this).siblings(".sched").val();

    localStorage.setItem(time, sched);
});

function planner() {

    $(".hour").each(function (){
        var currentHour = $(this).text();
        var schedOtd = localStorage.getItem(currentHour);

        if (schedOtd !== null) {
            $(this).siblings(".sched").val(schedOtd);
        }
    });
}


timeBlockColor();

planner();