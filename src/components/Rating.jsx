import React from "react"

import starBase from "../data/images/star.svg"
import starRed from "../data/images/star_red.svg"

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5]
    return (
        <div className="rating">
            {stars.map((star) =>
                rating >= star
                    ? (<img src={starRed}  alt=""  key={star.toString()} className="rating__icon" />)
                    : (<img src={starBase} alt="" key={star.toString()} className="rating__icon" />  )
            )}
        </div>
    )
}

export default Rating
