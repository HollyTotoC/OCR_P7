import image from "../data/images/aboutHero.jpg"
import textContent from "../data/textContent.json"
import Hero from "../components/Hero"
import Collapse from "../components/Collapse"

const About= () => {
    return (
        <div className="about" role="main">
            <Hero className="about__hero" image={image} />
            <div className="about__container">
                <Collapse title={textContent.fiability.titre} content={textContent.fiability.text} />
                <Collapse title={textContent.respect.titre} content={textContent.respect.text} />
                <Collapse title={textContent.service.titre} content={textContent.service.text} />
                <Collapse title={textContent.security.titre} content={textContent.security.text} />
            </div>
        </div>
    )
}

export default About