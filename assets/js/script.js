$(document).ready(function() {

// ----------- NAV BAR ---------

// On load, hide all sections apart from 'home and footer'
$(function() {
    $("#eat, #drink, #stay, #mapeat01").hide();

    // When each nav li is clicked, hide all sections.
		$("#navbarbrand, #navhome, #naveat, #navdrink, #stay").on("click", function () {
			$("#home, #eat, #drink").hide();

			// Remove the 'selected' class from all li elements.
			$("#navhome, #naveat, #navdrink, #stay").removeClass('active');

			// If/else statements to check which li was clicked,
			// apply 'selected' class only to that li, and show the corresponding section.
			if ($(this).attr("id") == "navhome") {
				$("#navhome").addClass('active');
                $("#home, footer").show();
			} else if ($(this).attr("id") == "naveat") {
				$("#naveat").addClass('active');
                $("#eat").show();
			} else if ($(this).attr("id") == "navdrink") {
				$("#navdrink").addClass('active');
				$("#drink").show();
			} else if ($(this).attr("id") == "navstay") {
				$("#navstay").addClass('active');
                $("#stay").show();
                
            // If/else statements to check which box was clicked,
			// apply 'selected' class only to that li, and show the corresponding section.      

            if ($(this).attr("id") == "navbarbrand") {
				$("#navhome").addClass('active');
                $("#home").show();
			} else if ($(this).attr("id") == "naveat") {
				$("#naveat").addClass('active');
				$("#eat").show();
			} else if ($(this).attr("id") == "navdrink") {
				$("#navdrink").addClass('active');
				$("#drink").show();
			} else if ($(this).attr("id") == "navstay") {
				$("#navstay").addClass('active');
                $("#stay").show();
            }
			}
		});
	});
});

