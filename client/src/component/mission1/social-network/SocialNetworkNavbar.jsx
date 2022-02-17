import React from 'react';

const SocialNetworkNavbar = ({socialNetworkName}) => {
    return (
        <div className={'navbar'}>
            <div className={'social-network-name'}>{socialNetworkName}</div>
        </div>
    );
};

export default SocialNetworkNavbar;