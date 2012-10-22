
$(document).ready(function() {


	var currentId = "";
	$('ul#nav li').click(function(){
		currentId = $(this).attr('id');
	});


	 $("li#about").click(function() {
	 	 $("#right .page").hide();
		 $("#right #about").show();
	 });

	  $("li#tutorials").click(function() {
		 $("#right .page").hide();
		 $("#right #tutorials").show();
	 });

	   $("li#archives").click(function() {
		 $("#right .page").hide();
		 $("#right #archives").show();
	 });

	    $("li#homepage").click(function() {
		 $("#right .page").hide();
		 $("#right #home").show();
	 });

	  $("#left").css("height", $("#right").height());
});