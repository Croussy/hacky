import {GET_GAME_INFO} from "../actions/game.action";

const initialState = {name: ''}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_GAME_INFO:
            return action.payload
    }
    return state
}