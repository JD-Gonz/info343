//signup.js 

//document is ready for manipulation
$(function(){
    //document is now ready for manipulation
    var option;
    var idx;
    var state;
    var select = $('select[name="state"]');
    for(idx = 0; idx < usStates.length; ++idx) {
            state = usStates[idx];
            option = $(document.createElement('option'));
            option.attr('value', state.abbreviation);
            option.html(state.name);
            select.append(option);
    }

    $('.signup-form').submit(function() {
    	var signupForm = $(this);
    	var reqField;
	    var reqValue;
    	var addr1Input = signupForm.find('input[name="addr-1"]');
    	var addr1Value = addr1Input.val();
        if(addr1Value.length > 0) {
        	var zipInput = signupForm.find('input[name="zip"]');
	    	var zipValue = zipInput.val();
	    	if(zipValue.length == 0) {
	    		alert("Zip must be provided if an address is provided.");
	    		return false;
	    	}                        
        }
	    reqField = signupForm.find('input[name="first-name"]');
	    reqValue = reqField.val().trim();
	    if (0 == reqValue.length) {
	        alert('You must enter a first name!');
	        return false;
	    }
	    reqField = signupForm.find('input[name="last-name"]');
	    reqValue = reqField.val().trim();
	    if (0 == reqValue.length) {
	        alert('You must enter a last name!');
	        return false;
	    }
	    reqField = signupForm.find('input[name="email"]');
	    reqValue = reqField.val().trim();
	    if (0 == reqValue.length) {
	        alert('You must enter a valid email!');
	        return false;
	    }
    });

    $('.cancel-signup').click(function() {
    	$('.cancel-signup-modal').modal();
	});

	$('.btn-abandon').click(function(){
    	window.location = 'http://www.google.com';
	});

	$('select[name="refer"]').change(function(){
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');
	    if ('other' == referSelect.val().toLowerCase()) {
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    } else {
	        otherInput.attr('disabled', true);
	        otherInput.hide();
	    }
	});
}); //on document ready 