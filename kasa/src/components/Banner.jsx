import { NavLink } from "react-router-dom"
import logo from "../data/images/logo.svg"

const Banner = ({ image, text }) => {
  return (
    <header className="banner">
      <NavLink to="/">
        <img src={logo} alt="" className="banner__img" />
      </NavLink>
      <nav className="banner__nav">
        <NavLink className="banner__button" to="/">
          Accueil
        </NavLink>
        <NavLink className="banner__button" to="about">
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Banner
