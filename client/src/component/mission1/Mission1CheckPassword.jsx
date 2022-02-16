import React from 'react';
import '../../styles/mission1/mission1CheckPassword.css'

const Mission1CheckPassword = ({userPassword, handleChange, handleSubmit, isInvalid=true}) => {
    const invalidPassword = isInvalid ? <span className={'invalid-message'}>Mot de passe incorrect</span> : ''
    return (
        <div className={'mission1-check-password'}>
            <form className={'mission1-check-password-form'} onSubmit={handleSubmit}>
                <label className={'label-check-password'}>Mot de passe</label>
                <input className={'input-check-password'}
                       type={"text"}
                       value={userPassword}
                       placeholder={'Entrer le mot de passe'}
                       onChange={handleChange}/>
                {invalidPassword}
                <button className={'button-submit-check-password'}
                        type={"submit"}>
                    Valider
                </button>
            </form>
        </div>
    );
};

export default Mission1CheckPassword;