import styled from "styled-components";

import deadRising from "../img/deadrising.jpg";
import planescape from "../img/Planescape.jpg";
import theHunter from "../img/theHunter.jpg";

import { Link } from "react-router-dom";

import { motion } from "framer-motion"
import { pageAnimation } from "../animation"

const OurWork = () => {
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <h1>Our Work</h1>
            <Movie>
                <h2>Dead Rising</h2>
                <div className="line"></div>
                <Link to="/work/dead-rising">
                    <img src={deadRising} alt="frank" />
                </Link>
            </Movie>
            <Movie>
                <h2>Planescape</h2>
                <div className="line"></div>
                <Link to="/work/planescape-torment">
                    <img src={planescape} alt="planescape" />
                </Link>
            </Movie>
            <Movie>
                <h2>theHunter</h2>
                <div className="line"></div>
                <Link to="/work/theHunter">
                    <img src={theHunter} alt="theHunter" />
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background-color: #181818;
    color: white;
`

const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: .5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
`

export default OurWork