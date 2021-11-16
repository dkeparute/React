import { useEffect, useReducer } from "react";
import { addDomino, getDominos } from "./Actions/domino";
import Create from "./Components/Domino/Create";
import { dominosReducer } from "./Reducer/dominoReducer";

// 0
function App() {
    // cia bus visi domino
    const [dominos, dispachDominos] = useReducer(dominosReducer, []);

    // call bekas ir tuscias masyvas reiskia jog useeffectas pasileis kai komponentas uzikraus
    useEffect(() => {
        dispachDominos(getDominos());

    }, [])

    const create = (domino) => {
        dispachDominos(addDomino(domino));
    }
    return (
        <div className='domino'>
            <h1>Let's play Domino</h1>
            <Create create={create} />
        </div>
    );
}
export default App;