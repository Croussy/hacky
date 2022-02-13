import axios from "axios";

export const CREATE_OR_GET_PLAYER = "CREATE_OR_GET_PLAYER"

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
            if (res.data.step === 1) {
                res.data.step = 2
            }
            dispatch({type: CREATE_OR_GET_PLAYER, payload: res.data})
        }).catch((err) => console.log(err))
    }
}