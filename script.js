const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', e => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value
  const emailValue = email.value
  const passwordValue = password.value
  const passwordConfirmationValue = passwordConfirmation.value

  if (usernameValue == '') {
    setErrorFor(username, 'O nome do usuario e obrigatorio.')
  } else {
    setSuccsessFor(username)
  }

  if (emailValue == '') {
    setErrorFor(email, 'O email e obrigatorio.')
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'Por favor, insira um email valido.')
  } else {
    setSuccsessFor(email)
  }

  if (passwordValue == '') {
    setErrorFor(password, 'A senha e obrigatoria.')
  } else if (passwordValue.length < 7) {
    setErrorFor(password, 'A senha precisa ter no minimo 7 caracteres.')
  } else {
    setSuccsessFor(password)
  }

  if (passwordConfirmationValue == '') {
    setErrorFor(passwordConfirmation, 'a confirmação de senha e obrigatoria.')
  } else if (passwordConfirmationValue != passwordValue) {
    setErrorFor(passwordConfirmation, 'As senhas não conferem.')
  } else {
    setSuccsessFor(passwordConfirmation)
  }

  const formControls = form.querySelectorAll('.form-control')

  const formValid = [...formControls].every(formControl => {
    return (formControl.className = 'form-control success')
  })

  if (formValid) {
    console.log('O formulario esta 100% valido!')
  }
}

function setErrorFor(input, massage) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  // Adiciona a masagem de erro
  small.innerText = massage

  // Adiciona a classe de erro
  formControl.className = 'form-control error'
}

function setSuccsessFor(input) {
  const formControl = input.parentElement

  // Adiciona a classe de sucesso
  formControl.className = 'form-Control success'
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}
