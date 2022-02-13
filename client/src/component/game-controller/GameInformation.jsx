import React from 'react';
import '../../styles/game-information.css'
import GameInformationBlock from "./GameInformationBlock";
import {useSelector} from "react-redux";

const GameInformation = () => {
    const game = useSelector(state => state.gameReducer)
    return (
        <div className={'game-information'}>
            <div className="logo">{game.name}</div>
            <GameInformationBlock label={'Coup jouées'} value={'0'}/>
            <GameInformationBlock label={'Temps'} value={'00:00:00'}/>
            <button className={'restart-game-button'}>Recommencer la partie</button>
        </div>
    );
};

export default GameInformation;