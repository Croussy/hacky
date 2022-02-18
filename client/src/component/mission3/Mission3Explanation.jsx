import React from 'react';

const Mission3Explanation = ({isSuccess = false, title, subTitle, text, handleClick}) => {
    const disclaimerMessage = !isSuccess ? "Aucune inquietude vos identifiants Facebook n'ont pas été sauvegardés" : ''
    return (
        <div className={'mission3-explanation'}>
            <div className={'title'} style={{'color': isSuccess ? 'green': 'red'}}>{title}</div>
            <div className={'subtitle'}>{subTitle}</div>
            <div className={'text'}>{text}</div>
            <div className={'disclaimer'}>{disclaimerMessage}</div>
            <button className={'next-button'} onClick={handleClick}>Quitter la popup</button>
        </div>
    );
};

export default Mission3Explanation;