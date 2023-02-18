import React from "react"

const Hero = ({ image, slogan }) => {
    return (
        <div className="hero">
            <img src={image} alt="" className="hero__img" />
            <div className="hero__overlay">
                <h2 className="hero__text">{slogan}</h2>
            </div>
        </div>
    )
}

export default Hero
