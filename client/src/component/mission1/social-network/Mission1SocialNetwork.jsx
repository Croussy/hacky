import React from 'react';
import '../../../styles/mission1/social-network.css'
import SocialNetworkNavbar from "./SocialNetworkNavbar";
import SocialNetworkAccountPage from "./SocialNetworkAccountPage";


const Mission1SocialNetwork = ({data}) => {

    return (
        <div className={'social-network-page'}>
            <SocialNetworkNavbar socialNetworkName={data.socialNetworkName}/>
            <SocialNetworkAccountPage data={data}/>
        </div>
    );
};

export default Mission1SocialNetwork;