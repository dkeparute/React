import dominoGenerator from "../Common/dominoGenerator";
import { ADD_DOMINO, ADD_LEFT, ADD_RIGHT, DEL_DOMINO, GET_DOMINOS, HIDE_MESSAGE, RESET_LEFT_RIGHT, SHOW_MESSAGE, UPDATE_DOMINO } from "../Contstants/dominoTypes";

export const startPos = {
    left: 0,
    leftErr: false,
    right: 0,
    rightErr: false
}


// 5. jis gauna state ir action objekta ir grazina nauja state
export function dominoReducer(state, action) {
    // kadangi bus keiciama dalis steito, tada tikslinga pasidaryti kopija
    let newState = { ...state };
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
        case RESET_LEFT_RIGHT:
            newState = startPos;
            break;
        // kad nepyktu reaktas
        default:
    }
    return newState;
}

export function dominosReducer(state, action) {
    let newState = [...state];
    let i;
    switch (action.type) {
        case GET_DOMINOS:
            const dominos = localStorage.getItem('dominos');
            if (null === dominos) {
                newState = [];
            } else {
                newState = JSON.parse(dominos);
            }
            break;
        case ADD_DOMINO:
            action.payload.id = dominoGenerator('dominoId');
            newState.push(action.payload);
            localStorage.setItem('dominos', JSON.stringify(newState));
            break;
        case UPDATE_DOMINO:
            i = newState.findIndex(domino => domino.id === action.payload.id);
            newState[i].left = action.payload.left;
            newState[i].right = action.payload.right;
            localStorage.setItem('dominos', JSON.stringify(newState));
            break;
        case DEL_DOMINO:
            i = newState.findIndex(domino => domino.id === action.payload);
            newState.splice(i, 1);
            localStorage.setItem('dominos', JSON.stringify(newState));
            break;
        default: newState = state;
    }
    return newState;
}

export function messageReducer(state, action) {
    const newState = { ...state };
    switch (action.type) {
        case SHOW_MESSAGE:
            newState.text = action.payload;
            newState.show = true;
            break;
        case HIDE_MESSAGE:
            newState.show = false;
            break;
        default:
    }
    return newState;
}