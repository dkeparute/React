import { useReducer, useState } from "react";
import { actionAddOne, actionDoMUltiply } from "./Actions";
import { actionRemOneOne } from "./Actions";
import countReducer from "./Reducer/countReducer";

function App() {


    const [multi, setMulti] = useState(0);
    const handlemulti = e => setMulti(e.target.value);

    // const [count, setCount] = useState(0);
    const [count, countDispatch] = useReducer(countReducer, 0);

    const addOne = () => countDispatch(actionAddOne());
    // const addOne = () => {
    //     setCount(count + 1);
    // }
    const remOneOne = () => countDispatch(actionRemOneOne());
    // const remOneOne = () => {
    //     setCount(count - 1);
    // }
    // const multiply = () => {
    //     setCount(count * multi);
    // }

const multiply = () => countDispatch(actionDoMUltiply());

    return (
        <div className='reducer'>
            <h1>Hello, Reducer!</h1>
            <h1>{count}</h1>
            <div className='reducer-butons'>
                <button onClick={addOne}>Add more</button>
                <button onClick={remOneOne}>Less more</button>
                <input type="text" value={multi} onChange={handlemulti} />
                <button onCLick={multiply}>Multiply</button>
            </div>
        </div>
    );

}
export default App;