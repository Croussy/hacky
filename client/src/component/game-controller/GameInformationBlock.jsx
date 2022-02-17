import React from 'react';

const GameInformationBlock = ({label, value}) => {
    return (
        <div className={'game-information-block'}>
            <div className={'game-information-block-label'}>{label}</div>
            <div className={'game-information-block-value'}>{value}</div>
        </div>
    );
};

export default GameInformationBlock;