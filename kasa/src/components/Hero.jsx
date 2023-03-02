import React from "react"

const Hero = ({ image, slogan1, slogan2 }) => {
    return (
        <div className="hero">
            <img src={image} alt="Bannière de décoration" className="hero__img" />
            <div className="hero__overlay">
                <h1 className="hero__text">{slogan1}&shy; {slogan2}</h1>
            </div>
        </div>
    )
}

export default Hero
