import React, {useState} from 'react';
import '../../styles/welcome.css'
import {useDispatch} from "react-redux";
import {createOrGetPlayer} from "../../actions/player.actions";

const Welcome = ({game, player}) => {
    const [pseudo, setPseudo] = useState(player.name || '')
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(createOrGetPlayer(pseudo, game._id))
    }

    return (
        <div className={'welcome-container'}>
            <div className={'title'}>Bienvenue dans {game.name}</div>
            <div className={'description'}>{game.description}</div>
            <div className={'pseudo-form'}>
                <div className={'pseudo-label'}>
                    Entrez votre pseudo pour commencer à jouer
                    <div className={'pseudo-resume-game'}>( ou pour reprendre une partie )</div>
                </div>
                <input className={'pseudo-input'}
                       type={'text'}
                       value={pseudo}
                       onChange={e => setPseudo(e.target.value)}
                       placeholder={'Entrez votre pseudo'}/>
                <button className={'pseudo-submit'} onClick={handleClick}>Commencer</button>
            </div>
        </div>
    );
};

export default Welcome;