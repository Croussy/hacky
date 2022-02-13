import React from 'react';

const SocialNetworkPostImg = ({picturePath}) => {
    const imgUrl = `${import.meta.env.VITE_REACT_APP_API_URL}/img/${picturePath}`
    return (
        <div className={'post-img-container'}>
            <img  className={'post-img'} alt={'post-img'} src={imgUrl}/>
        </div>
    );
};

export default SocialNetworkPostImg;