import home1 from '../../src/img/Man.jpg'
import { Hide, Description, About, Image } from '../styles';
import { motion } from 'framer-motion';

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div  className="title">
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We have amazing staff with amazing skills</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="Angry witcher guy"></img>
            </Image>
        </About>
    )
}

export default AboutSection