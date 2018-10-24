function greatestNumber(){
	let userNumber1 = parseInt(prompt("enter first number"));
	let userNumber2 = parseInt(prompt("enter second number"));
	let userNumber3 = parseInt(prompt("enter third number"));


	if(userNumber1 > userNumber2 && userNumber1 > userNumber3){
		console.log("userNumber1 is the greatest");
	}else if(userNumber2 > userNumber1 && userNumber2 > userNumber3){
		console.log("userNumber2 is the greatest");
	}else{
		console.log("userNumber3 is the greatest")
	}

}

