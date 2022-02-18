import React from 'react';
import '../../styles/missions-informations.css'
import MissionInformation from "./MissionInformation";
import {useSelector} from "react-redux";

const MissionsInformations = ({game, player}) => {
    const missions = useSelector(state => state.missionReducer)
    const missionsHtml = missions.map(mission => {
        const isAchieved = player.missionsAchieved.indexOf(mission._id) !== -1
        const isActive = game.currentMissionId === mission._id
        return (
            <MissionInformation key={mission._id} isActive={isActive} mission={mission} isAchieved={isAchieved}/>
        )
    })
    return (
        <div className={'missions-informations'}>
            <div className="title">Vos missions</div>
            <div className={'mission-list'}>
                {
                    missionsHtml
                }
            </div>
        </div>
    );
};

export default MissionsInformations;