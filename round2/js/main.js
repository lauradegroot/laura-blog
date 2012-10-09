
$(document).ready(function() {
	 $("header li#about").click(function() {
	 	console.log("yep")
	 	 $("#left .page").hide();
		 $("#left #about").show();
	 });

	  $("header li#tutorials").click(function() {
	 	console.log("yep")
		 $("#left .page").hide();
		 $("#left #tutorials").show();
	 });

	   $("header li#archives").click(function() {
	 	console.log("yep")
		 $("#left .page").hide();
		 $("#left #archives").show();
	 });

	    $("header li#home").click(function() {
	 	console.log("yep")
		 $("#left .page").hide();
		 $("#left #home").show();
	 });
});