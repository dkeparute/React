import { ADD_LEFT, ADD_RIGHT } from "../Contstants/dominoTypes";

// 4. susidesime action kuriu reikes vykdyti siai aplikacijai
export function add_left(payload)
return {
    type: ADD_LEFT,
    payload: payload
}

export function add_right(payload) {
    return{
        type: ADD_RIGHT,
        payload: payload
    }
}