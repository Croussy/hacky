import React, {useState} from 'react';
import FormFacebook from "./FormFacebook";
import '../../styles/mission3/mission3.css'
import Popup from "../popup/popup";
import Mission3Explanation from "./Mission3Explanation";

const Mission3 = ({showPopup, handleClose}) => {
    const [stepMission, setStepMission] = useState(1)

    const handleClosePopup = () => {
        setStepMission(2)
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        setStepMission(3)
    }

    let contentPopup = ''
    const textExplanation = "En effet, il ne faut JAMAIS se connecter sur un site qui n'est pas le site d'origine. "
    switch (stepMission) {
        case 1:
            contentPopup = <FormFacebook handleSubmit={handleSubmitForm}/>
            break
        case 2:
            contentPopup = <Mission3Explanation isSuccess={true} title={'Bien joué !'}
                                                subTitle={'Vous avez évité de justesse à ce piège.'}
                                                handleClick={handleClose}
                                                text={textExplanation}/>
            break
        case 3:
            contentPopup = <Mission3Explanation title={'Perdu !'}
                                                subTitle={'Vous être tombés dans le piège.'}
                                                handleClick={handleClose}
                                                text={textExplanation}/>
            break
    }

    const popupShare = showPopup ?
        <Popup extraClass={'popup-share-facebook'} content={contentPopup} handleClose={handleClosePopup}/>
        : ''
    return (
        <div>
            {popupShare}
        </div>
    );
};

export default Mission3;