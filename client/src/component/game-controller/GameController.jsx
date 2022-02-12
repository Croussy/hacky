import React from 'react';
import "../../styles/game-controller.css"
import GameInformation from "./GameInformation";
import MissionContainer from "./MissionContainer";
import MissionsInformations from "./MissionsInformations";

const GameController = () => {
    return (
        <div className={"game-controller"}>
            <GameInformation/>
            <MissionContainer/>
            <MissionsInformations/>
        </div>
    );
};

export default GameController;