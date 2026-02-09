const title = document.getElementById('title');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const emailInput = document.getElementById('emailInput');
const output = document.getElementById('output');
const btnClick = document.getElementById('btnClick');

//querySelector
const description = document.querySelector('.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    button.textContent = 'Clicked!';

    let name = nameInput.value;
    let age = parseInt(ageInput.value);
    let email = emailInput.value;

    output.innerHTML = `<h2>Button clicked</h2>`;

    if(age >= 18){
        output.innerHTML += `<p>Welcome ${name}, you are now an adult!</p>`;
    } 
    else {
        output.innerHTML += `<p>Hello ${name}, you are  ${age} years old.</p>`;
    }

    if(name !== "" && !isNaN(age) && email !== ""){
        output.innerHTML += `<p>Hi ${name}, I am ${age} years old and my email is ${email}.</p>`;
    }
    else {
        output.innerHTML += `<p>Please fill in all fields.</p>`;
    }
});