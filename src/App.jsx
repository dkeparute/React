import { useEffect, useState } from "react";
import GroupAnimal from "./Components/GroupAnimal";

function App() {

    const [field, setField] = useState([]);
    // Add klausia ka prideti (what: avi ar karve)
    const add = (what) => {
        // pasidarom field kopija nes state busenos tiesiogiai negalime keist
        const fieldCopy = field.slice();
        // tada pridedame karve arba avi  i field kopija
        fieldCopy.push({ animal: what })
        // atiduojam field kopija
        setField(fieldCopy);
        console.log(fieldCopy);
    }

    useEffect(() => {
        console.log('susirenderino');
    }, [])

    return (
        <div className='field'>
            <div>
                {/* sukuriamas naujas komponentas GroupAnimal */}
                {field.map((fieldAnimal, index) => <GroupAnimal key={index} fieldAnimal={fieldAnimal}></GroupAnimal>)}
            </div>
            <button onClick={() => add('cow')}>Add cow</button>
            <button onClick={() => add('sheep')}>Add sheep</button>
        </div>
    );
}
export default App;