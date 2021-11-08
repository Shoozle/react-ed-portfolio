import { motion } from "framer-motion"
import styled from "styled-components";
import { pageAnimation, titleAnimation } from "../animation"



const ContactUs = () => {
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Hide>
                <Title>
                    <motion.h2 variants={titleAnimation}>Contact Us</motion.h2>
                </Title>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send an email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Follow us here</h2>
                    </Social>
                </Hide>
            </Hide>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`

const Title = styled.div`
    color: wheat;
    margin-bottom: 4rem;
`

const Hide = styled.div`
    overflow: hidden;
`

const Circle = styled.div`
    border-radius: 50%50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`

const Social = styled(motion.dv)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
        color: wheat;
    }
`

export default ContactUs