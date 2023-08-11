import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedThemePreference = localStorage.getItem('themePreference');
    if (savedThemePreference === 'dark') {
      toggleTheme();
    }
  }, []);

  function toggleTheme() {
    const body: HTMLBodyElement = document.querySelector('body');
    const imgTheme: Element = document.querySelector('.logo-img');
    const changeElement: Element = document.querySelector('img#change-theme');

    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);

    if (isDarkTheme) {
      body.classList.add('dark-theme');
      body.classList.remove('bg-tini-light');
      changeElement.setAttribute('src', '/img/morty.png');
      imgTheme.setAttribute('src', '/img/dark-theme.png');
      localStorage.setItem('themePreference', 'dark');
      console.log('theme dark');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('bg-tini-light');
      changeElement.setAttribute('src', '/img/rick.png');
      imgTheme.setAttribute('src', '/img/light-theme.png');
      localStorage.setItem('themePreference', 'light');
      console.log('theme light');
    }
  }
  return (
    <header className="header container d-flex justify-content-between">
      <div className="d-flex flex-row">
        <Link to="/"><img className="logo-img" src="/img/light-theme.png" alt="Imagem do rick com o morty"></img></Link>
      </div>
      <nav className="navbar d-flex flex-row align-items-center navbar-expand-lg">
        <img id="change-theme" src="/img/rick.png" alt="" onClick={toggleTheme}></img>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/characters">Characters</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/locations">Locations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episodes">Episodies</Link>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  )
}
