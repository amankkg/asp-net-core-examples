// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const password = document.querySelector('#password')
const confirm_ = document.querySelector('#confirmPassword')
const submit = document.querySelector('#submit')

const handlePasswordConfirm = () => {
    const isEmpty = password.value === ''
    const notEqual = password.value !== confirm_.value

    submit.disabled = isEmpty || notEqual
}

password.addEventListener('input', handlePasswordConfirm)
confirm_.addEventListener('input', handlePasswordConfirm)

handlePasswordConfirm()