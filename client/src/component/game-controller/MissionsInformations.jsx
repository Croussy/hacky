import React from 'react';
import '../../styles/missions-informations.css'
import MissionInformation from "./MissionInformation";

const MissionsInformations = () => {
    const mission1 = {
        name: "Mission 1 - Trouver le mot de passe",
        description: "Le but de la mission est de retrouver le mot de passe de madame Michu à l'aide des réseaux sociaux",
        isAchieved: true,
        isActive: true
    }
    const mission2 = {
        name: "Mission 2 - Quizz ",
        description: "Trouver un maximum de réponse aux questions posés sur la sécurité informatique",
        isAchieved: false,
        isActive: false
    }
    return (
        <div className={'missions-informations'}>
            <div className="title">Vos missions</div>
            <div className={'mission-list'}>
                <MissionInformation mission={mission1}/>
                <MissionInformation mission={mission2}/>
            </div>
        </div>
    );
};

export default MissionsInformations;