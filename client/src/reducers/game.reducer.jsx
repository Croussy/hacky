import {ADD_CURRENT_MISSION_ID, GET_GAME_INFO} from "../actions/game.action";

const initialState = {name: '', currentMissionId: ''}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_GAME_INFO:
            return action.payload
        case ADD_CURRENT_MISSION_ID:
            return {
                ...state,
                currentMissionId: action.payload
            }
    }
    return state
}