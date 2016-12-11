function toggleHandling() {
    $('button.toggle').toggleClass('btn-success');
    $('button.toggle').toggleClass('btn-default');
}

function button_on_slow(type) {
    $(type).css({ "pointer-events":"none"});
    $(type).addClass('active');
    $(type).animate({width: "100%"}, 600, function() {
        $(type).css({ "pointer-events":"auto"});
        if (!$(type).hasClass('active')) {
            $(type).css('width', '0%');
        }
    });
}

function button_on(type) {
    $(type).css('width', '100%');
    $(type).addClass('active');
}

function button_off(type) {
    $(type).css('width', '0%');
    $(type).removeClass('active');
}
