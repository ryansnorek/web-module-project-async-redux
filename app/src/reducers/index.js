import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, ADOPT, REMOVE_ADOPTION } from "../actions";

const initialState = {
    data: {},
    adoptions: [],
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
        case (ADOPT): 
            return ({
                ...state,
                adoptions: [...state.adoptions, action.payload],
            })
        case (REMOVE_ADOPTION):
            return ({
                ...state,
                adoptions: state.adoptions.filter(item => item.id !== action.payload)
            })
        default:
            return state;
    }
}