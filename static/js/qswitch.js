$(document).ready(function(){
	var n1 = 1;
	var n2 = 2;
	$(".nq").click(function(){
		$("#q" + n1).hide();
		$("#q" + n2).show();
		n1++;
		n2++;
	})
	$(".pq").click(function(){
		n1--;
		n2--;
		$("#q" + n1).show();
		$("#q" + n2).hide();
	})
});