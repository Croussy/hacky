import React from 'react';
import Mission1SocialNetwork from "./social-network/Mission1SocialNetwork";
import '../../styles/mission1/browser.css'

const Mission1Browser = ({data}) => {
    const url = `https://www.${data.socialNetworkName.toLowerCase()}.com/${data.firstName[0].toLowerCase()}.${data.lastName.toLowerCase()}`
    return (
        <div className={'mission1-browser'}>
            <div className={'header'}/>
            <div className={'navigation-bar'}>
                {url}
            </div>
            <Mission1SocialNetwork data={data}/>
        </div>
    );
};

export default Mission1Browser;