import {ADD_SCORE, CREATE_OR_GET_PLAYER, ADD_MISSION_ACHIEVED, REMOVE_SCORE} from "../actions/player.actions";

const initialState = {
    name: '',
    step: 1,
    globalScore: 0,
    missionsAchieved: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_OR_GET_PLAYER:
            return action.payload
        case ADD_SCORE:
            return {
                ...state,
                globalScore: state.globalScore + action.payload
            }
        case REMOVE_SCORE:
            let new_score = state.globalScore - action.payload
            if (new_score <= 500) {
                new_score = 500
            }
            return {
                ...state,
                globalScore: new_score
            }
        case ADD_MISSION_ACHIEVED:
            const data = {...state}
            data.missionsAchieved.push(action.payload)
            return data
    }
    return state
}