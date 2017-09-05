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
	var i = 1;
	$(".nextBtn").click(function(){
		$("#q" + i).fadeOut();
		i += 1;
		$("#q" + i).fadeIn();
	})
});
