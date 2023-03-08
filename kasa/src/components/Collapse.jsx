import React from "react"

import vector from "../data/images/Vector.svg"

const Collapse = ({title, content}) => {
    
    const ContentSelector = () => {
        return (
            <>
                {Array.isArray(content) ? (
                    <ul className="collapse__list">
                        {content.map((equipment, index) => (
                            <li key={index} className="collapse__list-element">
                                {equipment}
                            </li>
                        ))}
                    </ul>
                ) : (<p className="collapse__text">{content}</p>)}
            </>
        )
    } 

    const toCollapse = (e) => {
        const divContent = e.currentTarget.querySelector(".collapse__content")
        const iconContent = e.currentTarget.querySelector(".collapse__arrow")
        e.preventDefault();
        
        if (!divContent.classList.contains("open")) {
            divContent.classList.add("open")
            iconContent.classList.add("rotate")
        } else {
            divContent.classList.remove("open")
            iconContent.classList.remove("rotate")
        }
    }
    
    return (
        <div className="collapse" onClick={toCollapse}>
            <button type="button" className="collapse__button" >
                <span className="collapse__text">{title}</span>
                <img src={vector} alt="" className="collapse__arrow" />
            </button>
            <div className="collapse__content">
                <ContentSelector />
            </div>

        </div>
    )
}

export default Collapse;