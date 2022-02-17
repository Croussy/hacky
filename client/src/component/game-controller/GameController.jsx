import React, {useEffect} from 'react';
import "../../styles/game-controller.css"
import GameInformation from "./GameInformation";
import MissionContainer from "./MissionContainer";
import MissionsInformations from "./MissionsInformations";
import {useDispatch, useSelector} from "react-redux";
import {getInfoGame} from "../../actions/game.action";
import {getMissions} from "../../actions/missions.action";
import {savePlayer} from "../../actions/player.actions";

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
    return (
        <div className={"game-controller"}>
            <GameInformation game={game} player={player}/>
            <MissionContainer game={game} player={player} handleClickForNextMission={handleClickForNextMission}/>
            <MissionsInformations player={player}/>
        </div>
    );
};

export default GameController;