import axios from "axios";

export const CREATE_OR_GET_PLAYER = "CREATE_OR_GET_PLAYER"
export const ADD_SCORE = "ADD_SCORE"
export const REMOVE_SCORE = "REMOVE_SCORE"
export const SAVE_PLAYER = "SAVE_PLAYER"
export const ADD_MISSION_ACHIEVED = "ADD_MISSION_ACHIEVED"

export const createOrGetPlayer = (pseudo, gameId) => {
    return dispatch => {
        axios({
            method: 'post',
            url: `${import.meta.env.VITE_REACT_APP_API_URL}/api/player/`,
            data: {
                pseudo,
                gameId
            },
            withCredentials: true
        }).then((res) => {
            dispatch({type: CREATE_OR_GET_PLAYER, payload: res.data})
        }).catch((err) => console.log(err))
    }
}
export const addScoreToPlayer = (score) => {
    return dispatch => {
        dispatch({type: ADD_SCORE, payload: score})
    }
}
export const removeScoreToPlayer = (score) => {
    return dispatch => {
        dispatch({type: REMOVE_SCORE, payload: score})
    }
}
export const addMissionAchieved = (missionId) => {
    return dispatch => {
        dispatch({type: ADD_MISSION_ACHIEVED, payload: missionId})
    }
}
export const savePlayer = (gameId, player) => {
    return dispatch => {
        axios({
            method: 'put',
            url: `${import.meta.env.VITE_REACT_APP_API_URL}/api/player/${player.id}`,
            data: {
                gameId,
                globalScore : player.globalScore,
                step : player.step,
                missionsAchieved : player.missionsAchieved,
            },
            withCredentials: true
        }).then((res) => {
            dispatch({type: SAVE_PLAYER, payload: res.data})
        }).catch((err) => console.log(err))
    }
}