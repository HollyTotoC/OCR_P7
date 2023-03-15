import React from "react"
import { useState } from "react"

import arrow from "../data/images/arrow.png"

const Carrousel = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    // Slider arrow logic
    const Arrow = () => {
        //Button logic
        const next = () => {setCurrent(current === length - 1 ? 0 : current + 1)}
        const prev = () => {setCurrent(current === 0 ? length - 1 : current - 1)}

        
        return (
            <>
                <div className="slider__prev" onClick={prev}>
                    <img src={arrow} alt="" className="slider__prev--icon--rotate" />
                </div>
                <div className="slider__next" onClick={next}>
                    <img src={arrow} alt="" className="slider__next--icon" />
                </div>
            </>
        )
    }

    //Slider logic
    return (
        <div className="slider">
            {slides.map((picture, index) => {
                //Logic that add/remove class to display the slides
                const displayClass = index === current ? "slider__on" : "slider__off"
                
                return (
                    <div key={index} className={displayClass}>
                        {index === current && (
                            <img src={picture} alt="Diaporama du bien a louer" className="slider__img" />
                        )}
                    </div>
                )
            })}
            {
            //Add the arrow if more than one picture
                length > 1 ? <Arrow /> : null
            }
        </div>
    )
}

export default Carrousel
