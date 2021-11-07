import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { GameState } from "../gameState";
import { useEffect, useState } from "react";

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
            <Details>
                <Headline>
                    <h2>{game.title}</h2>
                    <img src={game.mainImg} alt={game.title}/>
                    <Awards>
                    {game.awards.map((award) => (<Award award={award.award} publication={award.publication} key={award.title} />))}
                    </Awards>
                </Headline>
            </Details>
        )}
        </>
    )
}

const Details = styled.div`
    color: white;
`

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
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
`

const Award = ({title, publication}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="award"></div>
            <p>{publication}</p>
        </AwardStyle>
    )
}

export default GameDetail;