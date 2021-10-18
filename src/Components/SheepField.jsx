import { useState } from "react";

function SheepField() {

    const [counter, setCounter] = useState({count:0});
    const [bgColor, setbgColor] = useState('green');

    const clickSheep = what => {
        console.log(what);
        let newCounter = counter.count;
        switch(what) {
            case 'one': newCounter++;
            break;
            case 'ten': newCounter+= 10;
            break;
            default: newCounter=0;
        }
        setCounter({count: newCounter});
    }

    const changeColor = () => {
        if(bgColor === 'green') {
            setbgColor('red');
        } else {
            setbgColor('green');
        }
    }

    return (
        <div className='cow-field'>
            <div className='counter' style={{ color: bgColor }}>{counter.count}</div>
            <button onClick={() => clickSheep('one')}>Add Sheep</button>
            <button onClick={() => clickSheep('ten')}>Add 10 Sheeps</button>
            <button onClick={() => clickSheep('go')}>Go home</button>
            <button onClick={changeColor}>Change color</button>
        </div >
    );
}
export default SheepField;