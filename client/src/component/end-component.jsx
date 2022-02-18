import React, {useState} from 'react';
import '../styles/end-page.css'
import GameInformationBlock from "./game-controller/GameInformationBlock";
import Mission3 from "./mission3/Mission3";

const EndComponent = ({player}) => {
    const [showPopup, setShowPopUp] = useState(false)
    const handleClosePopup = () => {
      setShowPopUp(false)
    }
    const handleClickOnShare = () => {
      setShowPopUp(true)
    }
    const mission3 = showPopup ? <Mission3 showPopup={showPopup} handleClose={handleClosePopup}/> : ''

    return (
        <div className={'hacky-end-page'}>
            <div className="logo"><img src={`${import.meta.env.VITE_REACT_APP_API_URL}/img/logo.svg`}
                                       alt={'logo hacky'}/>
            </div>
            <div className={'title'}>Merci d'avoir joué</div>
            <div className={'subtitle'}>A bientôt !</div>
            <GameInformationBlock label={'Votre score'} value={player.globalScore}/>
            <button className={'share-on-facebook'} onClick={handleClickOnShare}>Partager sur Facebook</button>
            {mission3}
        </div>
    );
};

export default EndComponent;