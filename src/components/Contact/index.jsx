import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters" 
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const contactArray = "Contact me".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return(
        <>
            <div className="container contact-page">
                <div className="text-zone centered">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={contactArray} 
                            idx={15} 
                        />
                    </h1>
                   
                    <div className="contact-icons-container">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ilya-seyfouri-3824422a0">
                            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="mailto:i.seyfouri@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact