import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const MissionInformation = ({mission, isActive = false, isAchieved = false}) => {
    const isDisabledClass = !isActive ? 'is-disabled' : ''
    const achievedIcon = isAchieved ? <FontAwesomeIcon className={'mission-achieved-icon'} icon={faCheckCircle}/> : ''
    return (
        <div className={`mission-information ${isDisabledClass}`}>
            <div className={'mission-information-content'}>
                <div className={'mission-name'}>{mission.name}</div>
                <div className={'mission-description'}>
                    {mission.description}
                </div>
            </div>
            {achievedIcon}
        </div>
    );
};

export default MissionInformation;