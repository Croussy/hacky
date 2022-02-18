import React from 'react';
import '../../styles/misson-container.css'
import Welcome from "../introduction/Welcome";
import Mission1 from "../mission1/Mission1";
import '../../styles/mission-common.css'
import Mission2 from "../mission2/Mission2";

const MissionContainer = ({player, game, handleClickForNextMission}) => {

    let missionDisplayed = ''
    switch (player.step) {
        case 1:
            missionDisplayed = <Welcome game={game} player={player}/>
            break
        case 2:
            missionDisplayed = <Mission1 missionID={game.missions[0]} handleClickForNextMission={handleClickForNextMission}/>
            break
        case 3:
            missionDisplayed = <Mission2 missionID={game.missions[1]} handleClickForNextMission={handleClickForNextMission}/>
            break
        case 4:
            missionDisplayed = <Mission2 missionID={game.missions[1]} handleClickForNextMission={handleClickForNextMission}/>
            break
    }

    return (
        <div className={'mission-container'}>
            {missionDisplayed}
        </div>
    );
};

export default MissionContainer;