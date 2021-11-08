import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { GameState } from "../gameState";
import { useEffect, useState } from "react";

import { motion } from "framer-motion"
import { pageAnimation } from "../animation"

const GameDetail = () => {
    const history = useParams();
    const id = history.id;

    const [games, setGames] = useState(GameState);
    const [game, setGame] = useState(null);

    useEffect(() => {
        const currentGame = games.filter((stateGame) => stateGame.url.includes(id))
        setGame(currentGame[0])
    }, [games, id])

    return (
        <> {game && (
            <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                <Headline>
                    <h2>{game.title}</h2>
                    <img src={game.mainImg} alt={game.title}/>
                    <Awards>
                    {game.awards.map((award) => (<Award award={award.award} publication={award.publication} key={award.award} />))}
                    </Awards>
                    <ImageDisplay>
                        <img src={game.mainImg} alt={game.title}/>
                    </ImageDisplay>
                </Headline>
            </Details>
        )}
        </>
    )
}

const Details = styled(motion.div)`
    color: white;
`

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 6%;
        left: 50%;
        transform: translate(-50%, -100%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: center;
`

const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: .5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0;
    }
`

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`

const Award = ({award, publication}) => {
    return (
        <AwardStyle>
            <h3>{award}</h3>
            <div className="line"></div>
            <p>{publication}</p>
        </AwardStyle>
    )
}

export default GameDetail;