import { useEffect, useReducer, useState } from "react";
import { addDomino, getDominos, hideMessage, showMessage } from "./Actions/domino";
import Create from "./Components/Domino/Create";
import Message from "./Components/Domino/Message";
import Plate from "./Components/Domino/Plate";
import { dominosReducer, messageReducer } from "./Reducer/dominoReducer";

// 0
function App() {
    // cia bus visi domino
    const [dominos, dispachDominos] = useReducer(dominosReducer, []);
    const [message, dispachMessage] = useReducer(messageReducer, {
        text: '',
        show: false
    });

    const [editId, setEditId] = useState(0);

    // call bekas ir tuscias masyvas reiskia jog useeffectas pasileis kai komponentas uzikraus
    useEffect(() => {
        dispachDominos(getDominos());

    }, [])

    const create = (domino) => {
        dispachDominos(addDomino(domino));
        dispachMessage(showMessage('New Domino plate was created!'));
        setTimeout(() => { dispachMessage(hideMessage()) }, 3000);
    }
    return (
        <div className='domino'>
            <h1>Let's play Domino</h1>
            <Create create={create} />
            <Message msg={message} />
            <div className='domino_table'>
            {
                dominos.map(p => <Plate key={p.id} plate={p} editId={editId} selectEdit={setEditId}></Plate>)
            }
            </div>
            
        </div>
    );
}
export default App;