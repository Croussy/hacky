import React from 'react';
import '../../styles/mission-common.css'

const Mission1Explanation = ({pseudo, handleclick}) => {
    return (
        <div className={'mission-explanation'}>
            <h1 className={'title'}> Explication</h1>
            <h2 className={'subtitle'}>{`Les erreurs de ${pseudo}`}</h2>
            <p>
                Comme vous l'avez deviné, la victime a utilisé des données personnelles, facilement trouvables sur les réseaux sociaux. <br/><br/>
                La seconde erreur a été d'avoir utilisé un mot de passe trop simple et donc trop faible.
                En effet, un hacker va pouvoir avec les outils qu'il a sa disposition et sans même se renseigner sur vous,
                trouver ce mot de passe, car les mots utilisés sont fréquemment utilisés dans d'autres mots de passe.
            </p>
            <h2 className={'subtitle'}>Créer un mot de passe fort</h2>
            Vos mots de passe doivent respecter les règles suivantes :
            <ul className={'rules-password-explanation'}>
                <li>Un mot de passe doit contenir au minimum <b>12 caractères</b></li>
                <li>Avec <b>4 types de caractères différents </b> (des minuscules, des majuscules, des chiffres et des caractères spéciaux)</li>
                <li>Il ne doit rien dire sur vous (<b>pas de données personnelles</b>)</li>
                <li><b>Un compte = un nouveaux mot de passe </b>(afin d'éviter d'être pirater sur tous vos comptes)</li>
                <li>
                    Ne jamais écrire vos mot de passe dans <b>un espace non sécurisé</b> (smartphone, post-it, fichier texte, etc.)
                    <ul>
                        <li>Il est conseiller d'utilisé un gestionnaire de mot de passe comme keepass, lastpass, bitwarden</li>
                    </ul>
                </li>
            </ul>
            <button className={'next-button'} onClick={handleclick}>Mission suivante</button>
        </div>
    );
};

export default Mission1Explanation;