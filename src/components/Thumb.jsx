import React from "react"

const Thumb = ({ image, title }) => {
    return (
        <div className="thumb">
            <h2 className="thumb__title">{title}</h2>
            <img src={image} alt="" className="thumb__img" />
            <div className="thumb__overlay"></div>
        </div>
    )
}

export default Thumb
