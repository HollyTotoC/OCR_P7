import React from "react"

import vector from "../data/images/Vector.svg"

const Collapse = ({title, content}) => {
    const toCollapse = (e) => {
        e.preventDefault();
        const divContent = e.target.nextSibling
        const iconContent = e.target.lastChild

        if (!divContent.classList.contains("open")) {
            divContent.classList.add("open")
            iconContent.classList.add("rotate")
        } else {
            divContent.classList.remove("open")
            iconContent.classList.remove("rotate")
        }
    }

    const ContentSelector = () => {
        return (
            <div className="collapse__content">
                {Array.isArray(content) ? (
                    <ul className="collapse__list">
                        {content.map((equipment, index) => (
                            <li key={index} className="collapse__list-element">
                                {equipment}
                            </li>
                        ))}
                    </ul>
                ) : (<p className="collapse__text">{content}</p>)}
            </div>
        )
    } 

    return (
        <div className="collapse">
            <button type="button" className="collapse__button" onClick={toCollapse}>
                <span className="collapse__text">{title}</span>
                <img src={vector} alt="" className="collapse__arrow" />
            </button>
            <ContentSelector />
        </div>
    )
}

export default Collapse;