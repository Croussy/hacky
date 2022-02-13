import React from 'react';
import '../../styles/game-information.css'
import GameInformationBlock from "./GameInformationBlock";

const GameInformation = ({player, game}) => {
    return (
        <div className={'game-information'}>
            <div className="logo">{game.name}</div>
            <GameInformationBlock label={'Score'} value={player.globalScore}/>
            <GameInformationBlock label={'Temps'} value={'00:00:00'}/>
        </div>
    );
};

export default GameInformation;