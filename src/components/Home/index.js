import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders'; 

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  function Timeout() {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }
  const nameArray = ['J', 'a', 'k', 'e', ' ', 'w', 'r', 'i', 'g', 'h', 't']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    Timeout();
  })


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>
            
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Enthusiast / Coding connoisseur</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
