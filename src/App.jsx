import { useEffect, useState } from "react";
import GroupAnimal from "./Components/GroupAnimal";

function App() {

    const [field, setField] = useState([]);
    // kontroliuojamas STATE
    const [fieldNumber, setFieldNumber] = useState(1);

    // Add klausia ka prideti (what: avi ar karve)
    const add = (what) => {
        // pasidarom field kopija nes state busenos tiesiogiai negalime keist
        const fieldCopy = field.slice();
        // tada pridedame karve arba avi  i field kopija
        fieldCopy.push({ animal: what, field: parseInt(fieldNumber) })
        // atiduojam field kopija
        setField(fieldCopy);
        console.log(fieldCopy);
    }

    const selectField = event => {
        setFieldNumber(event.target.value);
    }

    useEffect(() => {
        console.log('susirenderino');
    }, [field])

    useEffect(() => {
        console.log('susirenderino');
    }, [fieldNumber])

    return (
        <>
            <div className='field'>
                <div className='field_part'>
                    {/* sukuriamas naujas komponentas GroupAnimal */}
                    {field.map((fieldAnimal, index) => <GroupAnimal key={index} field={1} fieldAnimal={fieldAnimal}></GroupAnimal>)}
                </div>
                <div className='field_part'>
                    {/* sukuriamas naujas komponentas GroupAnimal */}
                    {field.map((fieldAnimal, index) => <GroupAnimal key={index} field={2} fieldAnimal={fieldAnimal}></GroupAnimal>)}
                </div>
                <div className='field_part'>
                    {/* sukuriamas naujas komponentas GroupAnimal */}
                    {field.map((fieldAnimal, index) => <GroupAnimal key={index} field={3} fieldAnimal={fieldAnimal}></GroupAnimal>)}
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
        </>
    );
}
export default App;