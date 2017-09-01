$(document).ready(function(){
	$("#y").click(function(){
		$("#yes").fadeIn();
		$("#no").fadeOut();
		
	})
});

$(document).ready(function(){
	$("#n").click(function(){
		$("#no").fadeIn();
		$("#yes").fadeOut();
	})
});

$(document).ready(function(){
	$(".nextBtn").click(function(){
		$("#q1").fadeOut();
		$("#q2").fadeIn();
	})
});
