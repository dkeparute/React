import { ADD_ONE, DO_MULTIPLY, REM_ONE_ONE } from "../Contstants/type";

export function actionAddOne() {
    return {
        type: ADD_ONE

    }
}
export function actionRemOneOne() {

    return{
        type:REM_ONE_ONE
    }
}

export function actionDoMUltiply(payload) {
return {
    type: DO_MULTIPLY,
    payload: payload
}
}