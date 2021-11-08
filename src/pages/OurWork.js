import styled from "styled-components";

import deadRising from "../img/deadrising.jpg";
import planescape from "../img/Planescape.jpg";
import theHunter from "../img/theHunter.jpg";
import { Link } from "react-router-dom";
import { Hide } from "../styles";
import { motion } from "framer-motion"
import { sliderContainer, slider, fade, pageAnimation, photoAnim, lineAnim } from "../animation"
import { useScroll } from "../components/useScroll";

const OurWork = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Game>
                <motion.h2 variants={fade}>Dead Rising</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/dead-rising">
                    <Hide>
                    <motion.img variants={photoAnim} src={deadRising} alt="frank" />
                    </Hide>
                </Link>
            </Game>
            <Game ref={element} variants={fade} animate={controls} initial="hidden">
                <motion.h2 variants={fade}>Planescape</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/planescape-torment">
                    <motion.img variants={photoAnim} src={planescape} alt="planescape" />
                </Link>
            </Game>
            <Game ref={element2} variants={fade} animate={controls2} initial="hidden">
                <motion.h2 variants={fade}>theHunter</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/theHunter">
                    <motion.img variants={photoAnim} src={theHunter} alt="theHunter" />
                </Link>
            </Game>
            
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

const Game = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        height: .5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
`

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
    background: #8effa0;
`

export default OurWork