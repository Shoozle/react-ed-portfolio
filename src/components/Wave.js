import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
    return (
    <WaveSvg viewBox="0 0 1425 394" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path initial={{pathLength: 0, pathOffset: 1}}
            animate={{pathLength: 1, pathOffset: 0}}
            transition={{duration: 1}}
         d="M5 2C122 385 485.479 494.887 752 280C1103 -3.00003 1281 -11 1421 113" stroke="#3ABFAF" stroke-width="9" strokeOpacity="0.5" />
    </WaveSvg>
    )
}

const WaveSvg = styled.svg`
    position: absolute;
    z-index: -1;
    left: -1rem;
    width: 105%;
`

export default Wave