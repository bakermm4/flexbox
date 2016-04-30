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

		$(".a_container div").html("");
	    	
	    e.preventDefault();
	});

	  	


	$( "#a_end" ).click(function(e) {

		$(".a_container").css({"align-items" : "flex-end"});

		$(".a_container div").html("");
	    	
	    e.preventDefault();
	});



	$( "#a_center" ).click(function(e) {

		$(".a_container").css({"align-items" : "center"});

		$(".a_container div").html("");
	    	
	    e.preventDefault();
	});



	$( "#stretch" ).click(function(e) {

		$(".a_container").css({"align-items" : "stretch"});
	    
	    $(".a_container div").html("");

	    e.preventDefault();
	});



	$( "#baseline" ).click(function(e) {

		$(".a_container").css({"align-items" : "baseline"});

		$(".a_container div").html("Baseline");

		$(".a_container div:first-child").css({"font-size" :"0.6em"});

		$(".a_container div:nth-child(2n)").css({"font-size" :"1.2em"});

		$(".a_container div:last-child").css({"font-size" :"2em"});

	    e.preventDefault();
	});




})( window, undefined );






