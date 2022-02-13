import {combineReducers} from "redux";
import gameReducer from './game.reducer'
import missionReducer from "./mission.reducer";

export default combineReducers({
    gameReducer,
    missionReducer
})