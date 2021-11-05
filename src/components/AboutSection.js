import home1 from '../../src/img/Man.jpg'

import { Hide, Description, About, Image } from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true</h2>
                    </Hide>
                </div>
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