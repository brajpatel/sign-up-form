const button = document.getElementById('create-account')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm_password')


password.addEventListener('keyup', passwordConfirmation)
confirmPassword.addEventListener('keyup', passwordConfirmation)

function passwordConfirmation() {
    let passwordValue = document.getElementById('password').value
    let confirmPasswordValue = document.getElementById('confirm_password').value

    if(confirmPasswordValue === passwordValue) {
        password.style.border = "3px solid green"
        confirmPassword.style.border = "3px solid green"
    }
    else if (passwordValue !== confirmPasswordValue) {
        password.style.border = "3px solid red"
        confirmPassword.style.border = "3px solid red"
    }
}