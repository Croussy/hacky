import React from 'react';
import SocialNetworkPost from "./SocialNetworkPost";

const SocialNetworkPosts = ({data}) => {
    const partnerName = `${data.firstNamePartner} ${data.lastNamePartner}`
    const posts = data.posts.map((post, index) => <SocialNetworkPost key={index} post={post} partnerName={partnerName}/>)
    return (
        <div className={'social-network-posts'}>
            {
                posts
            }
        </div>
    );
};

export default SocialNetworkPosts;