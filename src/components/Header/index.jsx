import { Link } from 'react-router-dom'
import Footer from '../Footer';

export const Header = ({ children }) => {

  return (
    <>
      <header className="header container d-flex justify-content-between">
        <div className="d-flex flex-row">
          <Link to="/"><img className="logo-img" src="/img/light-theme.png" alt="Imagem do rick com o morty"></img></Link>
        </div>
        <nav className="navbar d-flex flex-row align-items-center navbar-expand-lg">
          <img id="change-theme" src="/img/rick.png" alt=""></img>
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
    </>
  )
}
