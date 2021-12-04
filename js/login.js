let username = document.getElementById("username");
let password = document.getElementById("password");
let age = document.getElementById("age");
let view_btn = document.getElementById("view_password");
let login_btn = document.getElementById("login_btn");
let details = document.getElementById("details");

function viewPassword() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

view_btn.addEventListener("click", function () {
    viewPassword();
});

login_btn.addEventListener("click", function () {
    details.innerText = `
    username: ${username.value} \n
    password: ${password.value} \n
    age: ${age.value} \n
    `;

});
