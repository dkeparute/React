import { ADD_LEFT, ADD_RIGHT } from "../Contstants/dominoTypes";

// 5. jis gauna state ir action objekta ir grazina nauja state
export function dominoReducer(state, action) {
    // kadangi bus keiciama dalis steito, tada tikslinga pasidaryti kopija
    const newState = { ...state };
    let number = parseInt(action.payload);
    // tada svitchina action tipa
    switch (action.type) {
        case ADD_LEFT:
            if (isNaN(number)) {
                number = 0;
            }
            else if (number > 6) {
                number = 6;
            }
            else if (number < 0) {
                number = 0;
            }
            // butinai reikia dvigubos lygybes nes action visad abus stringas
            if (number == action.payload) {
                newState.leftErr = false;
            }
            else {
                newState.leftErr = true;
            }
            newState.left = number;
            break;
        case ADD_RIGHT:
            if (isNaN(number)) {
                number = 0;
            }
            else if (number > 6) {
                number = 6;
            }
            else if (number < 0) {
                number = 0;
            }
            // butinai reikia dvigubos lygybes nes action visad abus stringas
            if (number == action.payload) {
                newState.rightErr = false;
            }
            else {
                newState.rightErr = true;
            }
            newState.right = number;
            break;
        // kad nepyktu reaktas
        default:
    }
    return newState;
}
