//USE OF AN ARRAY

function adopt()
{ 
	//get user input
	userName = prompt('What is your name?');
	userPhone = prompt('What is your phone number?');
	userCatsNo = prompt('How many cats would you kike to adopt?');
	
	//Validate prompt to avoid accepting null values
	if (userName == null || userName.length == 0 || /^\s+$/.test(userName) ||
	userPhone == null || userPhone.length == 0 || /^\s+$/.test(userPhone) ||
	userCatsNo == null || userCatsNo.length == 0 || /^\s+$/.test(userCatsNo)
	)
	{
		alert("Please, answer all questions.")
	}else 
	{
		//alert("Questions answered properly")
		var userChoice = []; //Declare array
		var size = userCatsNo; // Array size

		for(var i=0; i < size; i++) 
		{
		userChoice[i] = prompt('Enter name of the cat no '+(i+1)+ ' you wish to adopt ');
		}

		console.log(userChoice); //Print the array in the console
		window.alert(userName +', thank you! We will contact you on ' + userPhone + ' about the adoption of: '+ userChoice + ' shortly :)'); //show msg to user
		hide();
	}
	
}

//hide function to hide button after request
function hide()
{
document.getElementById("button").style.display="none";
}