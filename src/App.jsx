import { useEffect, useState } from "react";
import GroupAnimal from "./Components/GroupAnimal";
import idGenerator from "./Common/idGenerator";

function App() {

    const [field, setField] = useState([]);
    // kontroliuojamas STATE
    const [fieldNumber, setFieldNumber] = useState(1);

    // Add klausia ka prideti (what: avi ar karve)
    const add = (what) => {
        // pasidarom field kopija nes state busenos tiesiogiai negalime keist
        const fieldCopy = field.slice();
        // tada pridedame karve arba avi  i field kopija
        fieldCopy.push({
            id: idGenerator(),
            animal: what,
            field: parseInt(fieldNumber)
        });
        // atiduojam field kopija
        setField(fieldCopy);
        // tuo paciu pasetinam i local storaga
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
        console.log(fieldCopy);
    }

    const selectField = event => {
        setFieldNumber(event.target.value);
    }

    const goHome = (id) => {
        const fieldCopy = field.slice();
        fieldCopy.forEach((a, i) => {
            if (a.id === id) {
                fieldCopy.splice(i, 1);
            }
        });
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }

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


    useEffect(() => {
        // klausiam ar ka nors turi is gyvuliu
        const animalsfromStorage = localStorage.getItem('animals');
        if (null !== animalsfromStorage) {
            setField(JSON.parse(animalsfromStorage));
        }
    }, []);


    return (
        <>
            <div className='field'>
                <div className='field_part'>
                    {/* sukuriamas naujas komponentas GroupAnimal */}
                    {field.map((fieldAnimal, index) => <GroupAnimal key={index} field={1} fieldAnimal={fieldAnimal} goHome={goHome}></GroupAnimal>)}
                </div>
                <div className='field_part'>
                    {/* sukuriamas naujas komponentas GroupAnimal */}
                    {field.map((fieldAnimal, index) => <GroupAnimal key={index} field={2} fieldAnimal={fieldAnimal} goHome={goHome}></GroupAnimal>)}
                </div>
                <div className='field_part'>
                    {/* sukuriamas naujas komponentas GroupAnimal */}
                    {field.map((fieldAnimal, index) => <GroupAnimal key={index} field={3} fieldAnimal={fieldAnimal} goHome={goHome}></GroupAnimal>)}
                </div>
            </div>

            <div>
                <div className='buttons-holder'>
                    <button onClick={() => add('cow')}>Add cow</button>
                    <button onClick={() => add('sheep')}>Add sheep</button>
                    <button onClick={() => add('horse')}>Add horse</button>
                </div>
                <select value={fieldNumber} onChange={selectField}>
                    <option value={1}>Field One</option>
                    <option value={2}>Field Two</option>
                    <option value={3}>Field Three</option>
                </select>
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