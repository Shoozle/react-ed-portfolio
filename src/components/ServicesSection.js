import clock from '../img/clock.svg';
import money from '../img/money.svg';
import chicken from '../img/chicken.svg';
import blood from '../img/blood.svg';
import home2 from '../img/home2.jpg';

import styled from 'styled-components';
import { Description, About, Image } from '../styles';

const ServicesSection = () => {

    return (
        <Services>
            <Description>
                <h2>High <span>Quality</span> Services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="clock icon" src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p> lorem ipsum sanguine la doctoria </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="chicken icon" src={chicken} />
                            <h3>Yummy</h3>
                        </div>
                        <p> lorem herbert lawrence horse guts</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="money icon" src={money} />
                            <h3>Bills</h3>
                        </div>
                        <p> lorem eternity sonata snorlax salah</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="blood icon" src={blood} />
                            <h3>Blood</h3>
                        </div>
                        <p>lorem atelier sudoku fate resonance</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home" />
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        padding: 2rem 0 4rem 0;
        width: 70%;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
        img, svg {
            width: 2rem;
        }
    }
`


export default ServicesSection