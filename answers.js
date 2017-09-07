var i = 1;
$(document).ready(function(){
	$(".y").click(function(){
		console.log(i);
		$(".answer1").fadeIn();
		$(".answer2").fadeOut();
	})
	$(".n").click(function(){
		console.log(i);
		$(".answer2").fadeIn();
		$(".answer1").fadeOut();
	})
	$(".nextBtn").click(function(){
		$("#q" + i).fadeOut();
		$(".answer1,.answer2").fadeOut();
		i += 1;
		$("#q" + i).fadeIn();
		console.log(i);
	})
});
