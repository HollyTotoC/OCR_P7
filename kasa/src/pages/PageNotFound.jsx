import React from "react";
import { Link } from "react-router-dom";

function PageNotFound () {
    return (
        <div className="error">
            <div className="error__container">
                <p className="error_code">404</p>
                <p className="error_text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </div>
            <Link to="/" className="error__link">
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}

export default PageNotFound;