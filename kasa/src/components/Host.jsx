import React from "react"

const Host = ({ host }) => {
    const splitHost = host.name.split(" ")
    const [firstname, lastname] = splitHost

    return (
        <div className="host">
            <div className="host__name">
                <p className="host__firstname">{firstname}</p>
                <p className="host__lastname">{lastname}</p>
            </div>
            <img className="host__img" src={host.picture} alt="" />
        </div>
    )
}

export default Host
