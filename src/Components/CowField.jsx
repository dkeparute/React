import { useState } from "react";

function CowField({ counterColor }) {

    const [counter, setCounter] = useState(0);

    const addCow = () => {
        console.log('Cow will be added soon');

        const newCounter = counter + 1;

        setCounter(newCounter);

        console.log(counter);

        // const masyvas = ['labas', 'karve'];
        // console.log(masyvas);

        // const pasisveikinimas = masyvas[0];
        // const vardas = masyvas[1];
        // TAS PATS KAIP:
        // const [pasisveikinimas, vardas] = masyvas;
        // console.log(pasisveikinimas,vardas);
    }

    const add10Cows = () => {
        const newCounter = counter + 10;
        setCounter(newCounter);

    }


    const goHome = () => {
        setCounter(0);
    }

    return (
        <div className='cow-field'>
            <div className='counter' style={{ color: counterColor }}>{counter}</div>
            <button onClick={addCow}>Add Cow</button>
            <button onClick={add10Cows}>Add 10 Cows</button>
            <button onClick={goHome}>Go home</button>
        </div >
    );
}
export default CowField;