
//checks to see if the veriables needed to submit have
//some sort of value in them.

function check() {
	var name = (document.getElementById('name').value).trim();
    var address1 = (document.getElementById('address1').value).trim();
    var zip = (document.getElementById('zip').value).trim();
    var phone = (document.getElementById('phone').value).trim();

	if (name.length == 0 || address1.length == 0 || zip.length == 0 || phone.length == 0) {
	  alert('You must fill out all your information before ordering');
	  return false;
	} else {
	  return true;
	}
} 
