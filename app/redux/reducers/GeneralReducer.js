import { TYPE_SAVE_SELECTED_SCREEN } from "../actions/GeneralActions";

const initialState = {
    selectedScreen: ""
}
export function generalReducer(state = initialState, action) {
    switch (action.type) {
        case TYPE_SAVE_SELECTED_SCREEN:
            return Object.assign({}, state, {
                selectedScreen: action.value
            })
        default:
            return state

    }
}