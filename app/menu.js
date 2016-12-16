$(function () {
	var btn_width = $("#menu-btn").outerWidth() + 20;
	$("#menu").css("right", btn_width);
});

$(function (){
	$(".non-expand-link").click(function (){
		$(".modal-dialog").css("width", "600px");
	});
	$("#skype-link").click(function () {
		$(".modal-dialog").css("width", "80%");
	});
})

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
