import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getData = () => {
    return (dispatch) => {
        dispatch({ type:FETCH_START });

        axios.get('https://api.imgflip.com/get_memes')
            .then(res => {
                dispatch({ type:FETCH_SUCCESS, payload:res.data[0] })
            })
            .catch(err => {
                dispatch({ type:FETCH_ERROR, payload:err })
            })
    }
}
export default getData;
