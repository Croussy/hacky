import React from 'react';

const Mission2Success = ({nbCorrectAnswer, total, handleClick}) => {
    return (
        <div className={'mission-success-container'}>
            <div className={'title'}>Quizz terminé</div>
            <div className={'subtitle'}>{`Vous avez eu ${nbCorrectAnswer} bonne réponse${nbCorrectAnswer > 1 ? 's': ''} sur ${total} questions`}</div>
            <button className={'next-button'} onClick={handleClick}>
                OK
            </button>
        </div>
    );
};

export default Mission2Success;