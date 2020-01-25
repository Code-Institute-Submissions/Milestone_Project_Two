$(document).ready(function() {

// ----------- NAV BAR ---------

// On load, hide all sections apart from 'home'
$(function() {
    $("#eat, #drink, #stay, #mapeat01").hide();

    // When each nav li is clicked, hide all sections.
		$("#navhome, #naveat, #navdrink, #navstay").on("click", function () {
			$("#home, #eat, #drink, #stay").hide();

			// Remove the 'active' class from all li elements.
			$("#navhome, #naveat, #navdrink, #stay").removeClass('active');

			// If/else statements to check which li was clicked,
			// apply 'active' class only to that li, and show the corresponding section.
			if ($(this).attr("id") == "navhome") {
				$("#navhome").addClass('active');
                $("#home").show();

            } else if ($(this).attr("id") == "navbarbrand") {
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
        });
	});
});

