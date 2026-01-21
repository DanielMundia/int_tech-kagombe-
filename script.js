const registrationForm = document.querySelector("#registrationForm");
const name = document.querySelector("#name");
const age  = document.querySelector("#age");
const password = document.querySelector("#password");
const output = document.querySelector("#output");
registrationForm.addEventListener("submit", function(e){
    e.preventDefault();
    output.innerHTML = `<h3>Student Details</h3>
    <p><strong>Name:</strong> ${name.value}</p>
    <p><strong>Age:</strong> ${age.value}</p>
    <p><strong>Registration Number:</strong> ${password.value}</p>
    `;
});