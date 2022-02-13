import {GET_MISSIONS} from "../actions/missions.action";

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MISSIONS:
            return action.payload
    }
    return state
}