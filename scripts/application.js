$(document).ready(function () {
    $("#duplicate_register_div").hide();
    $("#error_div").hide();
    //var error_msg = GetURLParameter('status');
    $("#register_toggle").click(function () {
        $("#login_form").hide(500);
        $("#register_form").show(700);
    });
    $("#login_toggle").click(function () {
        $("#register_form").hide(500);
        $("#login_form").show(700);
    });


    /*---------------Populating Select Field through JSON----------------------*/

    $("#category_home").change(function () {

        var $dropdown = $(this);

        $.getJSON("search-data.json", function (data) {

            var key = $dropdown.val();
            var locationString = '';
            var locations = data[key];
            $.each(locations, function (i, item) {
                locationString += '<option value="' + i + '">' + item + '</option>';
            });
            $('#subcategory_home').html(locationString);
        });
    });

    /*    $.getJSON('search-data.json', function (json) {
            console.log("byfrtr");
        });

        //var datajson = JSON.parse(searchdata);

        $("#category_home").on('change', function () {
            // $("select#firstselectbox").html('')
            // alert("dsadasda");
            var locations = datajson[$(this).val()];
            var locationString = '';
            console.log(locations);
            $.each(locations, function (i, item) {

                console.log(JSON.stringify(item));

                // OUCH!!!

                locationString += '<option value="' + i + '">' + item + '</option>';
            });
            console.log(locationString)
            $('#subcategory_home').html(locationString);
        });*/


    /* function GetURLParameter(sParam) {
         var sPageURL = window.location.search.substring(1);
         var sURLVariables = sPageURL.split('&');
         for (var i = 0; i < sURLVariables.length; i++) {
                 var sParameterName = sURLVariables[i].split('=');
                 if (sParameterName[0] == sParam) {
                 	return sParameterName[1];
                 	}
             }
     };
     if(error_msg=="loginFailed") {
     	$("#error_div").show();
     };
     if(error_msg=="duplicate") {
     	$("#duplicate_register_div").innerHtml("user already exists");
     	$("#duplicate_register_div").show();    	
     };
      if(error_msg=="incomplete") {
      	$("#duplicate_register_div").innerHtml("invalid input");
     	$("#duplicate_register_div").show();
     }; */
    
    /*---------------Navigate to Specific Url based on Dropdown----------------------*/
    $("#search-submit-button").click(function(){
        var category = $('#category_home').val();
        var sub_category = $('#subcategory_home').val();
        alert(category + " " + sub_category);
        window.location.href = "/" + "category/" + category + "/" + sub_category;
    });     
    

});