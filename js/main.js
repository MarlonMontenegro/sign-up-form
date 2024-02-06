function showError(errorElement, errorMessage, element) {
    document.querySelector("." + errorElement).classList.add("display-error");
    document.querySelector("." + errorElement).innerHTML = errorMessage;
    element.style.border = "1px var(--Red) solid";
}


function clearError() {
    let errors = document.querySelectorAll(".error");
    let elements = document.querySelectorAll("input");

    for (let error of errors) {
        error.classList.remove("display-error");
    }

    for (let element of elements) {
        element.style.border = "1px var(--Blue) solid";
    }
}

function isConfirmPasswordEqual(pwd, pwdConfirm) {
    return pwd === pwdConfirm;
}

let form = document.forms['sign-up-form']


form.onsubmit = function (event) {

    clearError();

    if (form.first_name.value === "") {
        showError("first-name-error", "First Name cannot be Empty.", form.elements['first_name']);
    }

    if (form.last_name.value === "") {
        showError("last-name-error", "Last Name cannot be Empty.", form.elements['last_name']);
    }

    if (form.email.value === "") {
        showError("email-error", "Looks like this is not an email.", form.elements['email']);
    }

    if (form.password.value === "") {
        showError("password-error", "Password cannot be empty.", form.elements['password']);
    }

    if (form.confirm_pwd.value === "") {
        showError("confirm_pwd-error", "Password cannot be empty.", form.elements['confirm_pwd']);
    }

    if (!isConfirmPasswordEqual(form.password.value, form.confirm_pwd.value)) {
        showError("confirm_pwd-error", "Password needs to be equal", form.elements['confirm_pwd']);
    }

    event.preventDefault();
}