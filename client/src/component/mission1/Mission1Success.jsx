import React from 'react';
import '../../styles/mission1/mission1Success.css'

const Mission1Success = ({pseudo, handleclick}) => {
    const subtitleMessage = `Tu as trouvé le mot de passe de ${pseudo}`
    return (
        <div className={'mission1-success-container'}>
            <div className={'title'}>Félicitation !!!!</div>
            <div className={'subtitle'}>{subtitleMessage}</div>
            <button className={'next-button show-explanation'} onClick={handleclick}>
                {`Voir les erreurs faites par ${pseudo}`}
            </button>
        </div>
    );
};

export default Mission1Success;