console.log('Hello from external');

let user = prompt('Enter Name');
//prints welcome message to console
console.log('Welcome ' + user);

let messageH1 = document.getElementById('message');
//edits text of h1 element
messageH1.innerHTML = 'Welcome ' + user;

let userColor = prompt('Enter Color');
messageH1.style.color = userColor;