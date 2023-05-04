import React from "react"
import { Link } from "react-router-dom"

function PageNotFound () {
    return (
        <div className="error" role="main">
            <div className="error__container">
                <h1 className="error__code">404</h1>
                <p className="error__text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </div>
            <Link to="/" className="error__link">
                Retourner sur la page d’accueil
            </Link>
        </div>
    )
}

export default PageNotFound