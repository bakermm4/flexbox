/* js file */

(function( window, undefined ){

// JUSTIFY-CONTENT STYLES

	$( "#start" ).click(function(e) {

		$(".container").css({"justify-content" : "flex-start"});

	    e.preventDefault();
	});

	  	


	$( "#end" ).click(function(e) {

		$(".container").css({"justify-content" : "flex-end"});
	    	
	    e.preventDefault();
	});



	$( "#center" ).click(function(e) {

		$(".container").css({"justify-content" : "center"});
	    	
	    e.preventDefault();
	});



	$( "#between" ).click(function(e) {

		$(".container").css({"justify-content" : "space-between"});
	    	
	    e.preventDefault();
	});



	$( "#around" ).click(function(e) {

		$(".container").css({"justify-content" : "space-around"});
	    	
	    e.preventDefault();
	});



	// ALIGN-ITEM STYLES



	$( "#a_start" ).click(function(e) {

		$(".a_container").css({"align-items" : "flex-start"});
	    	
	    e.preventDefault();
	});

	  	


	$( "#a_end" ).click(function(e) {

		$(".a_container").css({"align-items" : "flex-end"});
	    	
	    e.preventDefault();
	});



	$( "#a_center" ).click(function(e) {

		$(".a_container").css({"align-items" : "center"});
	    	
	    e.preventDefault();
	});



	$( "#stretch" ).click(function(e) {

		$(".a_container").css({"align-items" : "stretch"});
	    	
	    e.preventDefault();
	});



	$( "#baseline" ).click(function(e) {

		$(".a_container").css({"align-items" : "baseline"});
	    	
	    e.preventDefault();
	});




})( window, undefined );






