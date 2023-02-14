import { NavLink } from "react-router-dom";
import logo from "../data/images/logo.svg"

function Banner({image,text}) {
  return (
    <header className="banner">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="banner__img" />
      </NavLink>
      <nav className="banner__nav">
        <NavLink to="/">
          Accueil
        </NavLink>
        <NavLink to="about">
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Banner;
