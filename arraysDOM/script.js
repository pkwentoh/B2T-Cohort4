function addFruitToFront(){
	let fruitValue = prompt("please enter new fruit");
	fruits.unshift(fruitValue);
	console.log(fruits);
	document.getElementById("fruitsH1").innerHTML = fruits.join(" with ")
}

let fruits = ["apple", "orange", "kiwi"];
document.getElementById("fruitsH1").innerHTML = fruits;

function addFruitToEnd(){
	fruits.push(document.getElementById("fruitId").value);
	fruits.sort();
	document.getElementById("fruitsH1").innerHTML = fruits.join(" with ")
	console.log(fruits);
}