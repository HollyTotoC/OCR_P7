import image from "../data/images/aboutHero.jpg"
import textContent from "../data/textContent"
import Hero from "../components/Hero"
import Collapse from "../components/Collapse"

const About= () => {
    return (
        <div className="about">
            <Hero className="about__hero" image={image} />
            <div className="about__container">
                <Collapse title="Fiabilité" content={textContent.fiability} />
                <Collapse title="Respect" content={textContent.respect} />
                <Collapse title="Service" content={textContent.service} />
                <Collapse title="Sécurité" content={textContent.security} />
            </div>
        </div>
    )
}

export default About