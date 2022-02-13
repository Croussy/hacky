import {combineReducers} from "redux";
import gameReducer from './game.reducer'
import missionReducer from "./mission.reducer";
import playerReducer from "./player.reducer";

export default combineReducers({
    gameReducer,
    missionReducer,
    playerReducer
})