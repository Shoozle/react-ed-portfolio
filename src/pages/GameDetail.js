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
                    <img src={game.mainImg} />
                </Headline>
            </Details>
        )}
        </>
    )
}

const Details = styled.div`

`

const Headline = styled.div`

`

export default GameDetail;