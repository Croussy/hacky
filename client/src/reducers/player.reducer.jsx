import {CREATE_OR_GET_PLAYER} from "../actions/player.actions";

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
    }
    return state
}