import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADOPT = "ADOPT";
export const REMOVE_ADOPTION = "REMOVE_ADOPTION";

export const getData = () => {
    return (dispatch) => {

        dispatch(fetchStart())

        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                dispatch(fetchSuccess(res.data.message))
            })
            .catch(err => {
                dispatch(fetchError(err))
            })
    }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}
export const fetchSuccess = data => {
    return({type: FETCH_SUCCESS, payload:data});
}
export const fetchError = error => {
    return({type: FETCH_ERROR, payload:error});
}
export const adopt = adoption => {
    return({type: ADOPT, payload:adoption})
};
export const removeAdoption = id => {
    return({type: REMOVE_ADOPTION, payload:id})
}