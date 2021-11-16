import { ADD_LEFT, ADD_RIGHT, GET_DOMINOS } from "../Contstants/dominoTypes";

// 4. susidesime action kuriu reikes vykdyti siai aplikacijai
export function addLeft(payload) {
    return {
        type: ADD_LEFT,
        payload: payload
    }
}

export function addRight(payload) {
    return {
        type: ADD_RIGHT,
        payload: payload
    }
}

export function getDominos() {
    return {
        type: GET_DOMINOS
    }
}