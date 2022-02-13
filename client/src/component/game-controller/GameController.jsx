import React, {useEffect} from 'react';
import "../../styles/game-controller.css"
import GameInformation from "./GameInformation";
import MissionContainer from "./MissionContainer";
import MissionsInformations from "./MissionsInformations";
import {useDispatch, useSelector} from "react-redux";
import {getInfoGame} from "../../actions/game.action";
import {getMissions} from "../../actions/missions.action";

const GameController = () => {
    const dispatch = useDispatch()
    const game = useSelector(state => state.gameReducer)
    useEffect(() => {
        dispatch(getInfoGame())
    }, [])
    useEffect(() => {
        if (game._id) {
            dispatch(getMissions(game._id))
        }
    }, [game])
    return (
        <div className={"game-controller"}>
            <GameInformation/>
            <MissionContainer/>
            <MissionsInformations/>
        </div>
    );
};

export default GameController;