import React from 'react';
import '../../styles/game-information.css'
import GameInformationBlock from "./GameInformationBlock";

const GameInformation = ({player}) => {
    return (
        <div className={'game-information'}>
            <div className="logo"><img src={`${import.meta.env.VITE_REACT_APP_API_URL}/img/logo.svg`} alt={'logo hacky'}/></div>
            <GameInformationBlock label={'Score'} value={player.globalScore}/>
        </div>
    );
};

export default GameInformation;