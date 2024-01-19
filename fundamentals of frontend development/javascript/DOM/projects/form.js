// now all html elements in DOM tree ,time to access them 😀
const form = document.querySelector('form')
const firstName = document.getElementById('firstname')
const lastName = document.querySelector('.lastname')
const email = document.querySelector('input[data-email="email"]')
const firstPassword = document.getElementsByClassName('firstPassword')[0]
const secondPassword = document.getElementsByClassName('secondPassword')[0]
const inputSubmit = document.querySelector('input[type="submit"]')

const printError = (inputName, errorMessage) => {
  const error = document.createElement('h2')
  error.className = "errorText"
  error.innerText = `${errorMessage} 😀!`
  inputName.insertAdjacentElement('afterend', error)
  setTimeout(() => {
    error.remove()
  }, [1500])

}
console.log(inputSubmit)
form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (firstName.value === '') {
    printError(firstName, 'ismingizni kiriting')
    return
  }

  if (lastName.value === "") {
    printError(lastName, 'familiyangizni kiriting')
    return
  }
  if (email.value === '') {
    printError(email, 'emailingizni kiriting')
    return
  }
  if (firstPassword.value === '') {
    printError(firstPassword, 'parolingizni kiriting')
    return
  }
  if (secondPassword.value === '') {
    printError(secondPassword, 'Iltimos parolni qaytadan kiriting')
    return
  }
  if (!secondPassword.value.includes(firstPassword.value) || !secondPassword.value.length === firstPassword.value.length) {
    alert('birinchi va ikkinchi tergan parolingiz mos kelmadi,iltimos qaytadan urinib ko\'ring')
    return
  } else {
    alert('Sizning accountingiz muvaffaqiyatli yaratildi 😃')
    form.submit()
  }
})

