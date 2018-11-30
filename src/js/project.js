// Events

$('.project_list button').on('click', function () {
        OpenProjectCmd();
    }
);

$('.history_list button').on('click', function () {
        // OpenHistoryCmd();
    }
);

// Create Project

$('.create_new_project').hide();

$('#create_new_project_form').on('click', function () {
        $('.create_new_project').show();
    }
);


$('#create_new_project_button').on('click', function () {
        // console.log(this);
        //*[@id="tabs-1"]/div[3]/div/form/input[2]
        var project_name = $('#project_name').val() || "";
        if (project_name.length > 0) {
            $('.project_list').prepend('<button class="ui-button ui-corner-all ui-widget">' + project_name + '</button>');
            $('.create_new_project').hide();

            OpenProjectCmd();
        } else {
            // $('#project_name').val()
            // tooltips.tooltip("open");
            $('#project_name')
                .animate({borderColor: 'red'}, 900)
                .delay(100)
                .animate({borderColor: 'black'}, 100);
            // $('#project_name').effect("highlight", {}, 1000);
        }
    }
);
