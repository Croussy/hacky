import React from 'react';

const SocialNetworkAccountPicture = ({accountPicture}) => {
    return (
        <div className={'account-picture'}>
            <div className="account-picture-wrapper">
                <img className={'account-picture-img'}
                     src={`${import.meta.env.VITE_REACT_APP_API_URL}/img/${accountPicture}`}
                     alt={'account-picture'}
                />
            </div>
        </div>
    );
};

export default SocialNetworkAccountPicture;