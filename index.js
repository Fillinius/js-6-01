const existingUserLogin = 'the_best_user'
const existingUserPassword = '12345678'

const userLogin = prompt('Введите логин')
const userPassword = prompt('Введите пароль')
console.log(userLogin.trim())
console.log(userPassword.trim())

if (
  userLogin.trim() === existingUserLogin &&
  userPassword.trim() === existingUserPassword
) {
  alert(`"Добро пожаловать ${userLogin.trim()}!"`)
} else {
  alert('Логин и (или) Пароль введены неверно!')
}
