import React from "react"
import logoFooter from "../data/images/logoFooter.svg"

const Footer = () => {
  const effectiveYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Logo" className="footer__logo" />
      <p className="footer__text">
        &copy;
        {effectiveYear} Kasa. All rights reserved
      </p>
    </footer>
  )
}

export default Footer
