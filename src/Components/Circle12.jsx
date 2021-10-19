import { useState } from "react";

function Circle12(props) {
    // CIA YRA HOOKAI
    const [digit1, setDigit1] = useState(0);
    const [digit2, setDigit2] = useState(0);

    // SETAS
    const addOne = () => {
        setDigit1(digit1 + 1);
    }
    const addMore = () => {
        setDigit2(digit1 + digit2);
    }
    const reset = () => {

    }

    return (
        <>
            <div className='circler' style={{ backgroundColor: props.color1 }}>
                <span>{digit1}</span>
                <button onClick={addOne}>Yes!</button>
            </div>
            <div className='circler' style={{ backgroundColor: props.color2 }}>
                <span>{digit2}</span>
                <button onClick={addMore}>Yes YES!</button>
            </div>
            <button onClick={reset}>0!</button>
        </>
    );
}
export default Circle12;