import styled from "styled-components";

import frank1 from "../img/frank.jpg";
import frank2 from "../img/frank2.jpg";
import frank3 from "../img/frank3.jpg";

import { Link } from "react-router-dom";

const OurWork = () => {
    return (
        <Work>
            <h1>Our Work</h1>
            <Movie>
                <h2>Dead Rising</h2>
                <div className="line"></div>
                <Link to="/">
                    <img src={frank1} alt="frank" />
                </Link>
            </Movie>
            <Movie>
                <h2>Off The Record</h2>
                <div className="line"></div>
                <Link to="/">
                    <img src={frank2} alt="frank2" />
                </Link>
            </Movie>
            <Movie>
                <h2>Balan</h2>
                <div className="line"></div>
                <Link to="/">
                    <img src={frank3} alt="frank3" />
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background-color: wheat;
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