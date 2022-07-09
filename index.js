const button = document.getElementById('create-account')
const password = document.getElementById('password')
const passwordLabel = document.getElementById('password-label')
const confirmPassword = document.getElementById('confirm_password')
const confirmPasswordLabel = document.getElementById('confirm-password-label')
const checkMark = '&#10004;'
const crossMark = '&#10060;'

password.addEventListener('keyup', passwordConfirmation)
confirmPassword.addEventListener('keyup', passwordConfirmation)

function passwordConfirmation() {
    let passwordValue = document.getElementById('password').value
    let confirmPasswordValue = document.getElementById('confirm_password').value

    if(confirmPasswordValue === passwordValue && passwordValue !== '' && confirmPasswordValue !== '') {
        password.style.border = "3px solid green"
        passwordLabel.innerHTML = "Password " + checkMark
        confirmPassword.style.border = "3px solid green"
        confirmPasswordLabel.innerHTML = "Confirm Password " + checkMark
    }
    else if (passwordValue !== confirmPasswordValue && passwordValue !== '' && confirmPasswordValue !== '') {
        password.style.border = "3px solid red"
        passwordLabel.innerHTML = "Password " + crossMark
        confirmPassword.style.border = "3px solid red"
        confirmPasswordLabel.innerHTML = "Confirm Password " + crossMark
    }
    else {
        password.style.border = "2px solid rgb(107, 107, 107)"
        confirmPassword.style.border = "2px solid rgb(107, 107, 107)"
    }
}