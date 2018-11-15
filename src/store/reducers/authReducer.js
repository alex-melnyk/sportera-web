import * as Type from "../types/index";

const initialState = {
    accessToken: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Type.AUTH_APPLY_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.accessToken
            };
        default:
            return state;
    }
};