import { FETCH_START } from "../actions";

const initialState = {
    data: {},
    isFetching: false,
    errors: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;