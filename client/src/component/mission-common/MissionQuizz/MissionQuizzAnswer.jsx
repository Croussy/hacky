import React from 'react';

const MissionQuizzAnswer = ({index, extraClass, text, handleClick}) => {
    return (
        <div className={`mission-quizz-answer ${extraClass}`} data-index={index} onClick={handleClick}>
            {text}
        </div>
    );
};

export default MissionQuizzAnswer;