import React from 'react';
import '../styles/end-page.css'
import GameInformationBlock from "./game-controller/GameInformationBlock";

const EndComponent = ({player}) => {
    return (
        <div className={'hacky-end-page'}>
            <div className="logo"><img src={`${import.meta.env.VITE_REACT_APP_API_URL}/img/logo.svg`} alt={'logo hacky'}/>
            </div>
            <div className={'title'}>Merci d'avoir joué</div>
            <div className={'subtitle'}>A bientôt !</div>
            <GameInformationBlock label={'Votre score'} value={player.globalScore}/>
        </div>
    );
};

export default EndComponent;