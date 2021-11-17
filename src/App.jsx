import { useEffect, useReducer, useState } from "react";
import { addDomino, delDomino, getDominos, hideMessage, showMessage, updateDomino } from "./Actions/domino";
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

    // PRASIDEDA CRUDAS-----------------------------------------------------

    // NODE READ
    useEffect(() => {
        dispachDominos(getDominos());

    }, [])

    // NODE CREATE
    const create = (domino) => {
        dispachDominos(addDomino(domino));
        dispachMessage(showMessage('New Domino plate was created!'));
        setTimeout(() => { dispachMessage(hideMessage()) }, 3000);
    }
    // NODE DELETE

    const deleteDomino = (id) => {
        dispachDominos(delDomino(id));
    }

    // NODE UPDATE
    const update = (id, domino) => {
        dispachDominos(updateDomino(id, domino));

    }

    return (
        <div className='domino'>
            <h1>Let's play Domino</h1>
            <Create create={create} />
            <Message msg={message} />
            <div className='domino_table'>
                {
                    dominos.map(p => <Plate
                        key={p.id}
                        plate={p}
                        editId={editId}
                        selectEdit={setEditId}
                        del={deleteDomino}
                    ></Plate>)
                }
            </div>

        </div>
    );
}
export default App;