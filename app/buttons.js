function toggleHandling() {
    $('button.toggle').toggleClass('btn-success');
    $('button.toggle').toggleClass('btn-default');
}

function button_on(type) {
    $(type).css('width', '100%');
}

function button_off(type) {
    $(type).css('width', '0%');
}
