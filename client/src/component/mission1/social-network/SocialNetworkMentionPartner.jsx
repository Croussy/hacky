import React from 'react';

const SocialNetworkMentionPartner = ({partnerName}) => {
    return (
        <div>
            <span>avec</span> <span className={'partnerName'}>{partnerName}</span>
        </div>
    );
};

export default SocialNetworkMentionPartner;