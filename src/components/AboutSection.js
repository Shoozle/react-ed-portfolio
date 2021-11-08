import home1 from '../../src/img/Man.jpg'
import { Hide, Description, About, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnim } from '../animation';

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you have. We have amazing staff with amazing skills
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="Angry witcher guy"></motion.img>
            </Image>
        </About>
    )
}

export default AboutSection