import React from 'react';
import SocialNetworkCoverPicture from "./SocialNetworkCoverPicture";
import SocialNetworkAccountPicture from "./SocialNetworkAccountPicture";
import SocialNetworkAccountInformation from "./SocialNetworkAccountInformation";
import SocialNetworkPosts from "./SocialNetworkPosts";

const SocialNetworkAccountPage = ({data}) => {
    const accountName = `${data.firstName} ${data.lastName}`
    return (
        <div className={'account-page-container'}>
            <div className={'account-page-wrapper'}>
                <div className={'account-page'}>
                    <SocialNetworkCoverPicture coverPicture={data.coverPicture}/>
                    <SocialNetworkAccountPicture accountPicture={data.accountPicture}/>
                    <div className={'account-name'}>{accountName}</div>
                    <SocialNetworkAccountInformation data={data}/>
                    <SocialNetworkPosts data={data}/>
                </div>
            </div>
        </div>
    );
};

export default SocialNetworkAccountPage;