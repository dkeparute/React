// import { useEffect, useState } from "react";
// import GroupAnimal from "./Components/GroupAnimal";
// import idGenerator from "./Common/idGenerator";

// function App() {

//     const [field, setField] = useState([]);

//     const [fieldNumber, setFieldNumber] = useState(1);


//     const add = (what) => {

//         const fieldCopy = field.slice();

//         fieldCopy.push({
//             id: idGenerator(),
//             animal: what,
//             field: parseInt(fieldNumber)
//         });

//         setField(fieldCopy);
//         // NORINT JOG NEISITRINTU INFORMACIJA
//         localStorage.setItem('animals', JSON.stringify(fieldCopy));
//         console.log(fieldCopy);
//     }

//     const selectField = event => {
//         setFieldNumber(event.target.value);
//     }
// // NORINT JOG PASPAUDUS ISSITRINTU GYVULYS
//     const goHome = (id) => {
//         const fieldCopy = field.slice();
//         const ind= fieldCopy.findIndex(e => e.id === id);
//         fieldCopy.splice(ind, 1);
//         setField(fieldCopy);
//         localStorage.setItem('animals', JSON.stringify(fieldCopy));
//     }
// // NORINT JOG PASPAUDUS ISVALYTU VISA GRUPE GYVULIU
//     const groupGoHome = (group) => {
//         const fieldCopy = field.slice();
//         while (true) {
//             const ind = fieldCopy.findIndex(e => e.animal === group);
//             if (ind < 0) {
//                 break;
//             }
//             fieldCopy.splice(ind, 1);
//         }
//         setField(fieldCopy);
//         localStorage.setItem('animals', JSON.stringify(fieldCopy));
//     }


//     useEffect(() => {
//         //  klausiame ar tu turi kokiu nors gyvuliu? Atsakymas bus null - nieko nera
//         const animalsfromStorage = localStorage.getItem('animals');
//         // jeigu yra gyvuliu, tada rasome:
//         if (null !== animalsfromStorage) {
//             // ir pasetinam i STATE
//             setField(JSON.parse(animalsfromStorage));
//         }
//     }, []);


//     return (
//         <>
//             <div className='field'>
//                 <div className='field_part'>

//                     {field.map((fieldAnimal, i) => <GroupAnimal key={i} field={1} fieldAnimal={fieldAnimal} goHome={goHome}></GroupAnimal>)}
//                 </div>
//                 <div className='field_part'>

//                     {field.map((fieldAnimal, i) => <GroupAnimal key={i} field={2} fieldAnimal={fieldAnimal} goHome={goHome}></GroupAnimal>)}
//                 </div>
//                 <div className='field_part'>

//                     {field.map((fieldAnimal, i) => <GroupAnimal key={i} field={3} fieldAnimal={fieldAnimal} goHome={goHome}></GroupAnimal>)}
//                 </div>
//             </div>
//             <select value={fieldNumber} onChange={selectField}>
//                 <option value={1}>Field One</option>
//                 <option value={2}>Field Two</option>
//                 <option value={3}>Field Three</option>
//             </select>
//             <div>
//                 <div className='buttons-holder'>
//                     <button onClick={() => add('cow')}>Add cow</button>
//                     <button onClick={() => add('sheep')}>Add sheep</button>
//                     <button onClick={() => add('horse')}>Add horse</button>
//                 </div>
//             </div>
//             <div className='buttons-holder'>
//                 <button onClick={() => groupGoHome('cow')}>Home cow</button>
//                 <button onClick={() => groupGoHome('sheep')}>Home sheep</button>
//                 <button onClick={() => groupGoHome('horse')}>Home horse</button>
//             </div>
//         </>
//     );
// }
// export default App;

import { useEffect, useState } from "react";
import GroupAnimal from "./Components/GroupAnimal";
import idGenerator from "./Common/idGenerator";

function App() {

    const [field, setField] = useState([]);

    const [fieldNumber, setFieldNumber] = useState(1);


    const add = (what) => {

        const fieldCopy = field.slice();

        fieldCopy.push({
            id: idGenerator(),
            animal: what,
            weight: 0,
            field: parseInt(fieldNumber)
        });

        setField(fieldCopy);
        // NORINT JOG NEISSITRINTU INFORMACIJA
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
        console.log(fieldCopy);
    }

    const selectField = event => {
        setFieldNumber(event.target.value);
    }
    // NORINT JOG PASPAUDUS ISSITRINTU GYVULYS
    const goHome = (id) => {
        const fieldCopy = field.slice();
        const ind = fieldCopy.findIndex(e => e.id === id);
        fieldCopy.splice(ind, 1);
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }
    // NORINT JOG PASPAUDUS ISVALYTU VISA GRUPE GYVULIU
    const groupGoHome = (group) => {
        const fieldCopy = field.slice();
        while (true) {
            const ind = fieldCopy.findIndex(e => e.animal === group);
            if (ind < 0) {
                break;
            }
            fieldCopy.splice(ind, 1);
        }
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }

    // APP komponente reikalingas sniuriukas - svorio pridejimas

    const addWeight = (id, w) => {
        // susikuriam karviu kopija
        const fieldCopy = field.slice();
        // susirandam indeksa
        const i = fieldCopy.findIndex(e => e.id === id);
        // i ta indeksa savybeje weight irasome nauja svori
        fieldCopy[i].weight = parseFloat(w);
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }



    useEffect(() => {
        //  klausiame ar tu turi kokiu nors gyvuliu? Atsakymas bus null - nieko nera
        const animalsfromStorage = localStorage.getItem('animals');
        // jeigu yra gyvuliu, tada rasome:
        if (null !== animalsfromStorage) {
            // ir pasetinam i STATE
            setField(JSON.parse(animalsfromStorage));
        }
    }, []);


    return (
        <>
            <div className='field'>
                <div className='field_part'>

                    {field.map((fieldAnimal, i) => <GroupAnimal key={i} field={1} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight}></GroupAnimal>)}
                </div>
                <div className='field_part'>

                    {field.map((fieldAnimal, i) => <GroupAnimal key={i} field={2} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight}></GroupAnimal>)}
                </div>
                <div className='field_part'>

                    {field.map((fieldAnimal, i) => <GroupAnimal key={i} field={3} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight}></GroupAnimal>)}
                </div>
            </div>
            <select value={fieldNumber} onChange={selectField}>
                <option value={1}>Field One</option>
                <option value={2}>Field Two</option>
                <option value={3}>Field Three</option>
            </select>
            <div>
                <div className='buttons-holder'>
                    <button onClick={() => add('cow')}>Add cow</button>
                    <button onClick={() => add('sheep')}>Add sheep</button>
                    <button onClick={() => add('horse')}>Add horse</button>
                </div>
            </div>
            <div className='buttons-holder'>
                <button onClick={() => groupGoHome('cow')}>Home cow</button>
                <button onClick={() => groupGoHome('sheep')}>Home sheep</button>
                <button onClick={() => groupGoHome('horse')}>Home horse</button>
            </div>
        </>
    );
}
export default App;