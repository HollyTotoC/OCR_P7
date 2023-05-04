import React from "react"
import { Link } from "react-router-dom"

import image from "../data/images/homeHero.png"
import products from "../data/logements.json"
import textContent from "../data/textContent.json"


import Hero from "../components/Hero"
import Thumb from "../components/Thumb.jsx"


const productPage = () => {
    return (
        <div className="home" role="main">
            <div className="home__hero">
                <Hero image={image} slogan1={textContent.slogan[0]} slogan2={textContent.slogan[1]} />
            </div>
            <div className="home__products">
                {products.map((product) => {
                    return (
                        <article key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <Thumb image={product.cover} title={product.title} />
                            </Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default productPage