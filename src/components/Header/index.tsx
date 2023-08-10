import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header container d-flex justify-content-between">
      <div className="d-flex flex-row">
        <Link to="/">asdsad</Link>
      </div>
      <nav className="navbar d-flex flex-row align-items-center navbar-expand-lg">

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

const img = ['<img className="logo-img" src="/img/light-theme.png" alt="Imagem do rick com o morty">', '<img id="change-theme" src="/img/rick.png" alt="">']

console.log(img)
