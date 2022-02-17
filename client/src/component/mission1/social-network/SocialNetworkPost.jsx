import React from 'react';
import SocialNetworkMentionPartner from "./SocialNetworkMentionPartner";
import SocialNetworkPostImg from "./SocialNetworkPostImg";

const SocialNetworkPost = ({post, partnerName}) => {
    const mentionPartner = post.mentionPartner ? <SocialNetworkMentionPartner partnerName={partnerName}/> : ''
    const postImg = post.picturePath !== '' ? <SocialNetworkPostImg picturePath={post.picturePath}/> : ''
    return (
        <div className={'account-post'}>
            <div className={'post-header'}>
                {post.date}
                {mentionPartner}
            </div>
            <div className={'post-content'}>
                {post.text}
            </div>
            {postImg}
        </div>
    );
};

export default SocialNetworkPost;