import React from "react"

import vector from "../data/images/Vector.svg"

const Collapse = ({title, content}) => {
    
    // Collapse content selector
    const ContentSelector = () => {
        return (
            <>
                {
                    // Checking if the content is an array or not
                    Array.isArray(content) ? (
                        //If it's an array, we display the list of equipment
                        <ul className="collapse__list">
                            {content.map((equipment, index) => (
                                <li key={index} className="collapse__list-element">
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        //Else it's a simple string and we display the content
                        <p className="collapse__text">{content}</p>
                    )
                }
            </>
        )
    } 

    // Collapse logic
    const toCollapse = (e) => {
        const divContent = e.currentTarget.querySelector(".collapse__content")
        const iconContent = e.currentTarget.querySelector(".collapse__arrow")
        e.preventDefault();
        
        //If the divContent as no .open class we add id with the rotation, else we remove the .rotate and .open class
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