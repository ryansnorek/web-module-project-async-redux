import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getData = () => {
    return (dispatch) => {
        // dispatch(() => ({ type:FETCH_START }));
        // dispatch(fetchStart())

        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                // dispatch(() => ({ type:FETCH_SUCCESS, payload:res.data[0] }));
                dispatch(fetchSuccess(res.data.message))
            })
            .catch(err => {
                // dispatch(() => ({ type:FETCH_ERROR, payload:err }));
                dispatch(fetchError(err))
            })
    }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}
export const fetchSuccess = (data)=> {
    return({type: FETCH_SUCCESS, payload:data});
}
export const fetchError = (error)=> {
    return({type: FETCH_ERROR, payload:error});
}