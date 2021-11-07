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
        const currentGame = games.filter((stateGame) => stateGame.url === id)
        setGame(currentGame)
    },[games, useParams.id])

    return (
        <div>
            <h1>Game Details</h1>
        </div>
    )
}

export default GameDetail;