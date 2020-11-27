const form = document.querySelector('#loginForm')
const reset = document.createElement('button')
const inputs = document.querySelectorAll('#loginForm input')

reset.innerText = 'Reset'
reset.type = 'button'

reset.addEventListener('click', () => {
    for (let input of inputs) input.value = ''
})

form.appendChild(reset)