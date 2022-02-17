import React from 'react';

const SocialNetworkCoverPicture = ({coverPicture}) => {
    return (
        <div className={'account-cover'}>
            <img className={'account-cover-picture'}
                 src={`${import.meta.env.VITE_REACT_APP_API_URL}/img/${coverPicture}`}
                 alt={'cover-account-image'}/>
        </div>
    );
};

export default SocialNetworkCoverPicture;