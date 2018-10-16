function getFormValue(){
	let fname = document.getElementById('fname').value;
	let lname = document.getElementById('lname').value;

	fullName = fname + " " + lname;

	document.getElementById('answerDisplay').innerHTML = 'Hello ' + fullName;
}
