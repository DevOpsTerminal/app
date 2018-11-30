// DEFAULT VALUES

$(function () {
    // $('.project_list button:first').click();
    OpenProjectCmd();

    $('.project_list button:first').addClass('ui-state-active');
    $('.history_list button:first').addClass('ui-state-active');

});


// Open Project Cmd
function OpenProjectCmd() {
    console.log('OpenProjectCmd');
    $(".project_cmd").slideDown("fast");
    // $(".history_cmd").slideUp("fast");
}


// Open History Cmd
function OpenHistoryCmd() {
    console.log('OpenHistoryCmd');
    $(".project_cmd").slideUp("fast");
    // $(".history_cmd").slideDown("fast");
}


var notLocked = true;
$.fn.animateHighlight = function (highlightColor, duration) {
    var highlightBg = highlightColor || "#FFFF9C";
    var animateMs = duration || 1500;
    var originalBg = this.css("backgroundColor");
    if (notLocked) {
        notLocked = false;
        this.stop().css("background-color", highlightBg)
            .animate({backgroundColor: originalBg}, animateMs);
        setTimeout(function () {
            notLocked = true;
        }, animateMs);
    }
};
//
// Usage example:
//
//     $("div").animateHighlight("#dd0000", 1000);


function buttonActive(button) {
    // button.animateHighlight("green", 2000);
    button.removeClass('deactive');
    button.addClass('active');
}


function buttonDeactive(button) {
    // button.animateHighlight("red", 200);
    button.removeClass('active');
    button.addClass('deactive');
}

// obsluga start stop
function startCommand(button) {
    console.log('start', button);
    var start_button = $(button);
    buttonActive(start_button);


    // get Stop
    var stop_button = $(button).parents('.row_cmd').find('.stop button');
    buttonDeactive(stop_button);
    // console.log('stop', stop_button);

}

function stopCommand(button) {
    console.log('stop', button);
    var stop_button = $(button);
    buttonActive(stop_button);

    // stop_button.removeClass('deactive');
    // stop_button.addClass('active');

    // get Stop
    var start_button = $(button).parents('.row_cmd').find('.start button');
    buttonDeactive(start_button);

    // console.log('stop', start_button);

}


$(document).ready(function () {


});

function triggerOnButtons() {

    if ($('.start button').length > 0) {

        $('.start button').on('click', function (event) {
            // event.preventDefault();
            startCommand(this);
        });
        $('.stop button').on('click', function (event) {
            // event.preventDefault();
            stopCommand(this);
        });
    } else {
        var message = " Not existing button";
        console.log(message);

    }

}

