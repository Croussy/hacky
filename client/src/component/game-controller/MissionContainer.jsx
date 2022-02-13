import React from 'react';
import '../../styles/misson-container.css'
import Welcome from "../introduction/Welcome";

const MissionContainer = ({player, game}) => {

    let missionDisplayed = ''
    switch (player.step) {
        case 1:
            missionDisplayed = <Welcome game={game} player={player}/>
            break

    }

    return (
        <div className={'mission-container'}>
            {missionDisplayed}
        </div>
    );
};

export default MissionContainer;