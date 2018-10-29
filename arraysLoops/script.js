let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let order = ["th", "st", "nd", "rd"];
for(let i = 0; i < color.length; i++)
	//use st for index 0
	//use nd for index 1
	//use rd for index 2
	//use th for index 3 - 6

	if(i > 2){
		document.getElementById("display").innerHTML += (i+1) + order[0] + ' choice is ' + color[i] + '<br>';
	}else{
		document.getElementById("display").innerHTML += (i+1) + order[i+1] + ' choice is ' + color[i] + '<br>';
	}
	


