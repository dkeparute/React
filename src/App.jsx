import { useState } from "react";



function App() {


    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count + 1);
    }

    const minusOne = () => {
        setCount(count-1);
    }

    return (
        <div className='reducer'>
            <h1>Hello, Reducer!</h1>
            <h1>{count}</h1>
            <div className='reducer-butons'>
                <button onClick={addOne}>Add more</button>
                <button onClick={minusOne}>Less more</button>
            </div>
        </div>
    );

}
export default App;