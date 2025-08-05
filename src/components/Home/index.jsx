import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import ilya from './images/ilya.jpg'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = " Ilya, ".split("");
    const jobArray = "Compit.".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return(
      <>
        <div className = "container home-page">
            <div className="text-zone">
                <h1>
                <span className = {`${letterClass} _8`}>H</span>
                <span className = {`${letterClass} _9`}>i</span>
                <br /> 
                <span className = {`${letterClass} _10`}>I</span>
                <span className = {`${letterClass} _11`}>'m</span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} /> 
                </h1>
                <h2>Computer Science 2027 at Newcastle University</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
                <img className="ilya-img" src={ilya} alt = "developer" />

        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Home