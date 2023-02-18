import React from "react"
import { Link } from "react-router-dom"

import image from "../data/images/homeHero.png"
import products from "../data/logements.json"
import textContent from "../data/textContent.js"
import Hero from "../components/Hero"
import Thumb from "../components/Thumb.jsx"

const slogan = textContent.slogan

const productPage = () => {
    return (
        <div className="home">
            <div className="home__hero">
                <Hero image={image} slogan={slogan} />
            </div>
            <section className="home__products">
                {products.map((product) => {
                    return (
                        <article key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <Thumb image={product.cover} title={product.title} />
                            </Link>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default productPage