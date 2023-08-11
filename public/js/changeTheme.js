const changeElement = document.querySelector('img#change-theme')
const imgTheme = document.querySelector('.logo-img')
const body = document.querySelector('body')
let isDarkTheme = false
console.log(changeElement)


function toggleTheme() {
  isDarkTheme = !isDarkTheme
  if (isDarkTheme) {
    body.classList.add('dark-theme')
    body.classList.remove('bg-tini-light')
    changeElement.setAttribute('src', '/img/morty.png')
    imgTheme.setAttribute('src', '/img/dark-theme.png')
    localStorage.setItem('themePreference', 'dark')
    console.log('theme dark')
  } else {
    body.classList.remove('dark-theme')
    body.classList.add('bg-tini-light')
    changeElement.setAttribute('src', '/img/rick.png')
    imgTheme.setAttribute('src', '/img/light-theme.png')
    localStorage.setItem('themePreference', 'light')
    console.log('theme light')
  }
}



const savedThemePreference = localStorage.getItem('themePreference')
if (savedThemePreference === 'dark') {
  toggleTheme()
}

changeElement.addEventListener('click', toggleTheme)