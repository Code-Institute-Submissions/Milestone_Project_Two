$(document).ready(function() {

/* ----------- NAV BAR START -----------  */

/* ------ On load, hide all sections apart from 'home'  ------ */ 

$(function() {
    $("#eat, #drink, #stay, #mapeat01").hide();

/* ------ Hide sections ------ */

		$("#navhome, #naveat, #navdrink, #navstay").click(function() {
			$("#home, #eat, #drink, #stay").hide();

/* ------ Remove active class ------ */

		$("#navhome, #naveat, #navdrink, #stay").removeClass('active');

/* ------ If/else statements to check which li was clicked ------ */
/* ------ apply 'active' class only to that li, and show the corresponding section ------ */
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


/* ----------- HOME PAGE BOXES START ----------- */

        $("#buttoneat, buttondrink, buttonstay").click(function() {
            $("#home, #eat, #drink, #stay").hide();

            if ($(this).attr("id") == "buttoneat") {
                $("#naveat").addClass('active');
                $("#eat").show();
           
            } else if ($(this).attr("id") == "buttondrink") {
                $("#navrink").addClass('active');
                $("#drink").show();
    
            } else if ($(this).attr("id") == "buttonstay") {
                $("#navstay").addClass('active');
                $("#stay").show();
            };
        });
});
    

/* ----------- HOME PAGE BOXES END ----------- */


        $("#eat01").click(function() {
            $("#home, #eat, #drink, #stay").hide();

            if ($(this).attr("id") == "eat01") {
                $("#naveat").addClass('active');
                $("#mapeat01").show();
                   };
        });







// END. NEED THIS AT END
;

/* --
$("#buttoneat").click(function(){
        $("#eat").show();
    })
*/