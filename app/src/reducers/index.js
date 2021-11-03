import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
    data: {},
    isFetching: false,
    errors: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START): 
            return ({
                ...state,
                data: {},
                isFetching: true,
                errors: ""
            })
        case (FETCH_SUCCESS):
            return ({
                ...state,
                data: action.payload,
                isFetching: false,
                errors: ""
            })
        case (FETCH_ERROR):
            return ({
                ...state,
                data: {},
                isFetching: false,
                errors: action.payload
            })
        default:
            return state;
    }
}