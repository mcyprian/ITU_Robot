$(function () {
	var btn_width = $("#menu-btn").outerWidth() + 20;
	$("#menu").css("right", btn_width);
});

function togglePlay() {
	if ($("#play-button").children().hasClass("glyphicon-play")) {
		$("#play-button").children().removeClass("glyphicon-play");
		$("#play-button").children().addClass("glyphicon-pause");
	}
	else {
		$("#play-button").children().removeClass("glyphicon-pause");
		$("#play-button").children().addClass("glyphicon-play");
	}
}
