import axios from "axios";

export const GET_MISSIONS = "GET_MISSIONS"

export const getMissions = (gameId) => {

    return dispatch => {
        axios({
            method: 'get',
            url: `${import.meta.env.VITE_REACT_APP_API_URL}/api/mission/gameMissions/${gameId}`,
            withCredentials: true
        }).then((res) => {

            dispatch({type: GET_MISSIONS, payload: res.data})
        }).catch((err) => console.log(err))
    }
}