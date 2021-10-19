import { useState } from "react";
import CircleDisplay from "./Components/CircleDisplay";

function App() {

    const [digit1, setDigit1] = useState(0);
    const [digit2, setDigit2] = useState(0);

    const addOne = () => {
        setDigit1(digit1 + 1);
    }
    const addMore = () => {
        setDigit2(digit1 + digit2);
    }
    const reset = () => {
        setDigit2(0);
        setDigit1(0);

    }

    return (
        <div>
            <CircleDisplay text={'Yes'} color={'pink'} digit={digit1} sniurelis={addOne} />
            <CircleDisplay text={'Yes Yes'} color={'yellow'} digit={digit2} sniurelis={addMore} />
            <button onClick={reset}>0!</button>
        </div>
    );
}
export default App;