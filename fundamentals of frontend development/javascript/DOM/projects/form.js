// now all html elements in DOM tree ,time to access them 😀
const form = document.querySelector('form')
const firstName = document.getElementById('firstname')
const lastName = document.querySelector('.lastname')
const email = document.querySelector('input[data-email="email"]')
const firstPassword = document.getElementsByClassName('firstPassword')[0]
const secondPassword = document.getElementsByClassName('secondPassword')[0]
const inputSubmit = document.querySelector('input[type="submit"]')
console.log(inputSubmit)
form.addEventListener('submit', () => {
  if (firstName.value === '') {
    const firstNameError = document.createElement('h2')
    firstNameError.className = "errorText"
    firstNameError.innerText = 'Iltimos ismingizni kiriting 😀!'
    firstName.insertAdjacentElement('afterend', firstNameError)
    setTimeout(() => {
      firstNameError.remove()
    }, [1000])
    return
  }

  if (lastName.value === "") {
    const lastNameError = document.createElement('h2')
    lastNameError.className = "errorText"
    lastNameError.innerText = 'Iltimos familiyangizni  kiriting 😀!'
    lastName.insertAdjacentElement('afterend', lastNameError)
    setTimeout(() => {
      lastNameError.remove()
    }, [1500])
    return
  }
  if (email.value === '') {
    const emailError = document.createElement('h2')
    emailError.className = "errorText"
    emailError.innerText = 'Iltimos emaylingizni  kiriting 😀!'
    email.insertAdjacentElement('afterend', emailError)
    setTimeout(() => {
      emailError.remove()
    }, [1500])
    return
  }
  if (firstPassword.value === '') {
    const passwordError = document.createElement('h2')
    passwordError.className = "errorText"
    passwordError.innerText = 'Iltimos parolingizni   kiriting 😀!'
    firstPassword.insertAdjacentElement('afterend', passwordError)
    setTimeout(() => {
      passwordError.remove()
    }, [1500])
    return
  }
  if (secondPassword.value === '') {
    const passwordError = document.createElement('h2')
    passwordError.className = "errorText"
    passwordError.innerText = 'Iltimos parolni qaytadan kiriting   kiriting 😀!'
    secondPassword.insertAdjacentElement('afterend', passwordError)
    setTimeout(() => {
      passwordError.remove()
    }, [1500])
    return
  }
  if (!secondPassword.value.includes(firstPassword.value) || !secondPassword.value.length === firstPassword.value.length) {
    alert('birinchi va ikkinchi tergan parolingiz mos kelmadi,iltimos qaytadan urinib ko\'ring')
    return
  } else {
    alert('Sizning accountingiz muvaffaqiyatli yaratildi 😃')

  }
})

