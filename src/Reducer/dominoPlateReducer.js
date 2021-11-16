import { ADD_LEFT, ADD_RIGHT } from "../Contstants/dominoTypes";

// 5. jis gauna state ir action objekta ir grazina nauja state
export function dominoPlateReducer(state, action) {
    // kadangi bus keiciama dalis steito, tada tikslinga pasidaryti kopija
    const newState = { ...state };
    // tada svitchina action tipa
    switch (action.type) {
        case ADD_LEFT:
            newState.left = action.payload;
            break;
        case ADD_RIGHT:
            newState.right = action.payload;
            break;
            // kad nepyktu reaktas
        default:
    }
}
