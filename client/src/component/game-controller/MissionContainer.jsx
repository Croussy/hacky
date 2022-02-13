import React from 'react';
import '../../styles/misson-container.css'
import Welcome from "../introduction/Welcome";
import Mission1 from "../mission1/Mission1";
import '../../styles/mission-common.css'

const MissionContainer = ({player, game}) => {

    let missionDisplayed = ''
    switch (player.step) {
        case 1:
            missionDisplayed = <Welcome game={game} player={player}/>
            break
        case 2:
            missionDisplayed = <Mission1 missionID={game.missions[0]}/>
            break

    }

    return (
        <div className={'mission-container'}>
            {missionDisplayed}
        </div>
    );
};

export default MissionContainer;