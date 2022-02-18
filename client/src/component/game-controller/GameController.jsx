import React, {Fragment, useEffect} from 'react';
import "../../styles/game-controller.css"
import "../../styles/mission-success.css"
import GameInformation from "./GameInformation";
import MissionContainer from "./MissionContainer";
import MissionsInformations from "./MissionsInformations";
import {useDispatch, useSelector} from "react-redux";
import {getInfoGame} from "../../actions/game.action";
import {getMissions} from "../../actions/missions.action";
import {savePlayer} from "../../actions/player.actions";
import EndComponent from "../end-component";

const GameController = () => {
    const dispatch = useDispatch()
    const game = useSelector(state => state.gameReducer)
    const player = useSelector(state => state.playerReducer)
    useEffect(() => {
        dispatch(getInfoGame())
    }, [])
    useEffect(() => {
        if (game._id) {
            dispatch(getMissions(game._id))
        }
    }, [game])

    const handleClickForNextMission = () => {
        const dataPlayer = {
            ...player,
            step: player.step + 1
        }
        dispatch(savePlayer(game._id, dataPlayer))
    }

    let gameContent = ''
    switch (player.step) {
        case 1:
        case 2:
        case 3:
            gameContent = (
                <Fragment>
                    <GameInformation player={player}/>
                    <MissionContainer game={game} player={player}
                                      handleClickForNextMission={handleClickForNextMission}/>
                    <MissionsInformations player={player}/>
                </Fragment>
            )
            break
        case 4:
            gameContent = <EndComponent player={player} />
            break
    }

    return (
        <div className={"game-controller"}>
            {gameContent}
        </div>
    );
};

export default GameController;