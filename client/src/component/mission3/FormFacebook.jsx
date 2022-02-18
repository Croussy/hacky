import React from 'react';
import '../../styles/mission3/formFacebook.css'

const FormFacebook = ({handleSubmit}) => {
    return (
        <div className={'form-facebook-container'}>
            <img className={'logo-facebook'} src={`${import.meta.env.VITE_REACT_APP_API_URL}/img/logo-facebook.svg`}
                 alt={'logo facebook'}/>
            <form className={'form-facebook'} onSubmit={handleSubmit}>
                <div className={'input-facebook-wrapper'}>
                    <input name={'email'}
                           className={'facebook-input'}
                           autoFocus={true}
                           placeholder={'Adresse e-mail ou numéro de tél.'}/>
                </div>
                <div className={'input-facebook-wrapper'}>
                    <input name={'password'}
                           type={"password"}
                           placeholder={'Mot de passe'}
                           className={'facebook-input'}/>
                </div>
                <button type={'submit'} className={'submit-facebook-form'}>Se Connecter</button>
                <div className={'password-forget-label'} onClick={handleSubmit}>Mot de passe oublié ?</div>
            </form>
        </div>
    );
};

export default FormFacebook;