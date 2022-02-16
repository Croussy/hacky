import React from 'react';
import '../../styles/mission1/mission1Success.css'

const Mission1Success = ({mission}) => {
    const subtitleMessage = `Tu as trouvé le mot de passe de ${mission.specificData.dataFakeSocialNetwork.firstName}`
    return (
        <div className={'mission1-success-container'}>
            <div className={'title'}>Félicitation !!!!</div>
            <div className={'subtitle'}>{subtitleMessage}</div>
            <div className={'prevention-message'}>

            </div>

        </div>
    );
};

export default Mission1Success;