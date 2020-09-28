function validation() {
	var user = document.getElementById('name').value;
	var user_email = document.getElementById('email').value;
	var user_mobile = document.getElementById('mobile').value;




	if (user == "") {
		document.getElementById('frname').innerHTML = "* &uarr; Please enter your name *";

		return false;
	}

	if (user.length <= 3) {
		document.getElementById('frname').innerHTML = "* &uarr; Minimum 4 charecter required *";

		return false;
	}
	else {
		document.getElementById('frname').innerHTML = "";

	}

	if (!isNaN(user)) {
		document.getElementById('frname').innerHTML = "* &uarr; Only charecters are allowed 	*";

		return false;
	}
	else {
		document.getElementById('frname').innerHTML = "";

	}








	if (user_email == "") {
		document.getElementById('emails').innerHTML = "* &uarr; Please enter your email *";
		return false;
	}

	// 	// if (user_email.indexOf('@' <=0 )){
	// 	// 	document.getElementById('emails').innerHTML="* &uarr; @ Position is invalid *";
	// 	// 	return false;
	// 	// }

	// if ((user_email.charAt(user_email.length-4)!='.') || (user_email.charAt(user_email.length-3)!='.')){
	// 	document.getElementById('emails').innerHTML="* &uarr; . Position is invalid *";
	// 	return false;
	// }
	else {
		document.getElementById('emails').innerHTML = "";

	}





	if (user_mobile == "") {
		document.getElementById('mob').innerHTML = "* &uarr; Please enter your mobile number *";
		return false;
	}
	if (isNaN(user_mobile)) {
		document.getElementById('mob').innerHTML = "* &uarr; Only digits allowed *";
		return false;
	}
	if (user_mobile.length != 10) {
		document.getElementById('mob').innerHTML = "* &uarr; Only 10 digits  mobile number allowed *";
		return false;
	}
	else {
		document.getElementById('mob').innerHTML = "";

	}

}

