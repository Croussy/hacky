import axios from "axios";

export const GET_GAME_INFO = "GET_GAME_INFO"

export const getInfoGame = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: `${import.meta.env.VITE_REACT_APP_API_URL}/api/game/Hacky`,
            withCredentials: true
        }).then((res) => {
            dispatch({type: GET_GAME_INFO, payload: res.data})
        }).catch((err) => console.log(err))
    }
}