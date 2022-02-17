import React from 'react';
import SocialNetworkPersonalInformation from "./SocialNetworkPersonalInformation";
import {faBriefcase, faCalendar, faHeart, faHome} from "@fortawesome/free-solid-svg-icons";

const SocialNetworkAccountInformation = ({data}) => {
    const birthday = `Née le ${data.birthday}`
    const location = `Habite à ${data.location}`
    const job = `${data.job}`
    const relationship = `Avec ${data.firstNamePartner} ${data.lastNamePartner}`
    return (
        <div className={'account-information'}>
            <div className={'personal-informations'}>
                <SocialNetworkPersonalInformation value={birthday} icon={faCalendar}/>
                <SocialNetworkPersonalInformation value={location} icon={faHome}/>
                <SocialNetworkPersonalInformation value={job} icon={faBriefcase}/>
                <SocialNetworkPersonalInformation value={relationship} icon={faHeart}/>
            </div>
        </div>
    );
};

export default SocialNetworkAccountInformation;