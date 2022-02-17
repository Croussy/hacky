import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SocialNetworkPersonalInformation = ({icon, value}) => {
    return (
        <div className={'personal-information'} >
            <FontAwesomeIcon className={'personal-information-icon'} icon={icon}/>
            <div className={'personal-value'}>
                {value}
            </div>
        </div>
    );
};

export default SocialNetworkPersonalInformation;