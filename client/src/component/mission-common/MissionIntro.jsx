import React from 'react';

const MissionIntro = ({mission, missionRules, handleClick}) => {
    return (
        <div className={'mission-intro'}>
            <div className={'mission-intro-content'}>
                <div className={'mission-name'}>{mission.name}</div>
                <div className={'mission-description'}>{mission.description}</div>
                <div className={'mission-rules'}>{missionRules}</div>
                <button className={'next-button'} onClick={handleClick}>Prêt !</button>
            </div>
        </div>
    )
};

export default MissionIntro;